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
