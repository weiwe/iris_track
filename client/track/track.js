/* global _, moment, io */

var app = angular.module('track', ['ngResource', 'ui.bootstrap',
  // 'googlechart', 'nvd3',
  'nvd3ChartDirectives'
  // , 'track.service', 'track.chart'
  ]);

app.controller('TrackCtrl', ['$scope', 
    function($scope) {

  $scope.simple = moment().toString();

  $scope.click_simple = function() {
    console.log('$scope.simple',$scope.simple);
  };

}]);
