'use strict';

/**
 * @ngdoc function
 * @name adhdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adhdApp
 */
angular.module('adhdApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.appName = "Field Assessment Tool";
    $scope.submitButtonLabel = "Begin!";

    

    $scope.startAssessment = function(){

    	localStorage['userId'] = $("#userId").val();
    	$location.path('/survey');


    }



  });
