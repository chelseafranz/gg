var app = angular.module("MyApp", []);
var ref = new Firebase("https://girl-gang.firebaseio.com");

var myDataRef = new Firebase('https://girl-gang.firebaseio.com');


      $('#passwordInput').keypress(function (e) {
              if (e.keyCode == 13) {
                var email = $('#emailInput').val();
                var password = $('#passwordInput').val();
                ref.createUser({
                        email    : email,
                        password : password
                      }, function(error, userData) {
                        if (error) {
                          console.log("Error creating user:", error);
                        } else {
                          console.log("Successfully created user account with uid:", userData.uid);
                          $('#messageInput').val('');
                      };
                      });

              }
            });


            // ref.authWithOAuthPopup("google", function(error, authData) {
            //   if (error) {
            //     console.log("Login Failed!", error);
            //   } else {
            //     console.log("Authenticated successfully");
            //     // payload = authData
            //   }
            // });

        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
        }
        });

(function() {
  'use strict';

  angular.module('MyApp')
    .controller('AppCtrl', function($scope) {
      $scope.demo = {
        topDirections: ['left', 'up'],
        bottomDirections: ['down', 'right'],

        isOpen: false,

        availableModes: ['md-fling', 'md-scale'],
        selectedMode: 'md-fling',

        availableDirections: ['up', 'down', 'left', 'right'],
        selectedDirection: 'up'
      };
    });

    angular.module('MyApp')

    .controller('AppCtrl', function($scope) {
      $scope.title1 = 'Button';
      $scope.title4 = 'Warn';
      $scope.isDisabled = true;

      $scope.googleUrl = 'http://google.com';

    });

    angular.module( 'MyApp', [ 'ngMaterial' ] )
                .controller("AppCtrl", function($scope) {
                  $scope.demo = {
                    topDirections: ['left', 'up'],
                    bottomDirections: ['down', 'right'],

                    isOpen: false,

                    availableModes: ['md-fling', 'md-scale'],
                    selectedMode: 'md-fling',

                    availableDirections: ['up', 'down', 'left', 'right'],
                    selectedDirection: 'up'};
                });

})();
app.controller("AppCtrl", ["$scope", "$firebaseAuth",
  function($scope, $firebaseAuth) {
    $scope.authObj = $firebaseAuth(ref);
  }
]);
app.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });

// create a User factory with a getFullName() method
app.factory("UserFactory", function($firebaseObject) {
  return $firebaseObject.$extend({
      getFullName: function() {
        // concatenate first and last name
        return this.first_name + " " + this.last_name;
      }
   });
});

// create a User object from our Factory
app.factory("User", function(UserFactory) {
  var ref = new Firebase(URL+"/users/");
  return function(userid) {
    return new UserFactory(ref.child(userid));
  }
});
