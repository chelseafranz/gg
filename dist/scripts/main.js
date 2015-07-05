var app = angular.module("MyApp", ['ngMaterial','ngRoute']);
var ref = new Firebase("https://girl-gang.firebaseio.com");
var myDataRef = new Firebase('https://girl-gang.firebaseio.com');


      $('#passwordInput').click(function (e) {
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
                          $location.path('/start/');
                      };
                      });

              }
            });





app.config(['$routeProvider', function($routeProvider){


 $routeProvider.when('/',{
    templateUrl: 'views/loginTemplate.html',
    controller: 'AppCtrl'
 });

    $routeProvider.when('/start', {
      templateUrl: 'views/startTemplate.html',
      controller: 'StartController'
    });

     $routeProvider.when('/users/:uid', {
      templateUrl: 'scripts/views/user-profile.html',
      controller: 'AppCtrl'
     });
}]);




app.controller('AppCtrl', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location) {

 $scope.authObj = $firebaseAuth(ref);
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';


    $scope.login = function(){
  UserFactory.login()
}

}]);

// var login= function(){
//         var email = $('#emailInput').val();
//         var password = $('#passwordInput').val();
//         var params = 'username='+email+'&password='+password;

//         ref.createUser({
//                         email    : email,
//                         password : password
//                       }, function(error, userData) {
//                         if (error) {
//                           console.log("Error creating user:", error);
//                         } else {
//                           console.log("Successfully created user account with uid:", userData.uid);
//                           $location.path('/start/');
//                       };
//                       });

//               };




 // $('#passwordInput').keypress(function (e) {
 //              if (e.keyCode == 13) {
 //                var email = $('#emailInput').val();
 //                var password = $('#passwordInput').val();
 //                ref.createUser({
 //                        email    : email,
 //                        password : password
 //                      }, function(error, userData) {
 //                        if (error) {
 //                          console.log("Error creating user:", error);
 //                        } else {
 //                          console.log("Successfully created user account with uid:", userData.uid);
 //                          $location.path('/start/');
 //                      };
 //                      });

 //              }
 //            });


    angular.module( 'MyApp' )
                .controller("AppCtrl", function($scope) {
                  
                });


// app.controller("AppCtrl", ["$scope", "$firebaseAuth",
//   function($scope, $firebaseAuth) {
//     $scope.authObj = $firebaseAuth(ref);
//   }
// ]);

// create a User factory with a getFullName() method
app.factory("UserFactory", function($firebaseObject) {
  

  var login = function(){
  console.log('hello!');
    };













        return{
          login : login
        }






  });

// create a User object from our Factory



      // Google authentication
            // ref.authWithOAuthPopup("google", function(error, authData) {
            //   if (error) {
            //     console.log("Login Failed!", error);
            //   } else {
            //     console.log("Authenticated successfully");
            //     // payload = authData
            //   }
            // });
      // Facebook authentication
        // ref.authWithOAuthPopup("facebook", function(error, authData) {
        //   if (error) {
        //     console.log("Login Failed!", error);
        //   } else {
        //     console.log("Authenticated successfully with payload:", authData);
        // }
        // });






