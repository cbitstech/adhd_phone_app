'use strict';

/**
 * @ngdoc function
 * @name adhdApp.controller:SurveyCtrl
 * @description
 * # SurveyCtrl
 * Controller of the adhdApp
 */
angular.module('adhdApp')
  .controller('SurveyCtrl', function ($scope,Questions) {
    var phq_questions = Questions.query('phq9');
    var amrs_questions = Questions.query('amrs');

    $scope.questionGroups = [phq_questions,amrs_questions];

    $scope.complete = function(){


    }  
  });
