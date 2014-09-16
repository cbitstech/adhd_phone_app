'use strict';

/**
 * @ngdoc directive
 * @name livewellApp.directive:questionGroup
 * @description
 * # questionGroup
 */
angular.module('adhdApp')
  .directive('questionGroup', function ($location) {
    return {
      templateUrl: 'views/questionGroups/question_group.html',
      restrict: 'E', 
      link: function postLink(scope, element, attrs) {

      	scope._LABELS = [
      		{name:'back',label:'Back'},
      		{name:'next',label:'Next'},
      		{name:'submit', label:'Save'}
      	];


    

            scope.questionGroups = _.flatten(scope.questionGroups);
            console.log(scope.questionGroups);

      	scope.label = function(labelName){
      		return _.where(scope._LABELS, {name:labelName})[0].label
      	}

      	scope.numberOfQuestions = scope.questionGroups.length;


      	scope.currentIndex = 0;

      	scope.showQuestion = function(questionIndex){
      		return questionIndex == scope.currentIndex;

      	}

      	scope.next = function(){
      		scope.currentIndex++;

      	};

      	scope.back = function(){

      		scope.currentIndex--;

      	};


      	//is overridden by scope.complete function if different action is desired at the end of survey
      	scope.submit = scope.complete || function(){

      		console.log($('form').serializeArray());
			$location.path('#/');
      		
      	}


      	scope.questionViewType = function(questionType){

      		switch (questionType){

      			case "radio" || "checkbox":
      			return "multiple"
      			break;
      			case "text" || "phone" || "email" || "textarea":
      			return "single"
      			break;
      			default:
      			return "html"
      			break;

      		}

      	}

      	console.log(scope,element,attrs);
      }
    };
  });
