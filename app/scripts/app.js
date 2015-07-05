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




app.config(function($routeProvider){

 $routeProvider.when('/',{
    templateUrl: 'views/loginTemplate.html',
    controller: 'AppCtrl'
 });

    $routeProvider.when('/start', {
      templateUrl: 'views/startTemplate.html',
      controller: 'AppCtrl'
    });

     $routeProvider.when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'AppCtrl'
     });

 });


