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
