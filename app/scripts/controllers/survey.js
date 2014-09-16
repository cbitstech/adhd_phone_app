'use strict';

/**
 * @ngdoc function
 * @name adhdApp.controller:SurveyCtrl
 * @description
 * # SurveyCtrl
 * Controller of the adhdApp
 */
angular.module('adhdApp')
  .controller('SurveyCtrl', function ($scope, $location, Questions) {
    var phq_questions = Questions.query('phq9');
    var amrs_questions = Questions.query('amrs');

    $scope.questionGroups = [phq_questions,amrs_questions];

    $scope.complete = function(){

    var guid = {};

    var S4 = function () {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
        }
 
    // then to call it, plus stitch in '4' in the third group
    var guid = function() {
      return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    }

    var sessionGUID = guid();

    	var pr = new PurpleRobot();

        var userId = localStorage['userId'];


        var data = $('form').serializeArray();

        console.log(data);

        _.each(data, function(el){

            var payload = {
            id: guid(),
            userId : userId,
            questionDataLabel : el.name,
            value : el.value,
            datetimeCreated : new Date(),
            sessionGUID : sessionGUID
            };

            pr.emitReading('surveyResponses',payload);
            console.log(payload);
        });

        $location.path("/finish")
    	



    }  
  });
