var myApp = angular.module('MyApp', []);

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
})();
