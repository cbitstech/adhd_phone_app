'use strict';

/**
 * @ngdoc service
 * @name livewellApp.Questions
 * @description
 * # Questions
 * Service in the livewellApp.
 */
angular.module('adhdApp')
  .service('Questions', function Questions() {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var content = {};
  var QUESTIONS_COLLECTION_KEY = 'questions';
  var RESPONSES_COLLECTION_KEY = 'question-responses';

  content.query = function(questionGroup){

  if (localStorage[QUESTIONS_COLLECTION_KEY] != undefined){
  //grab from synched local storage
  content.items = JSON.parse(localStorage[QUESTIONS_COLLECTION_KEY]);
  //filter to show only one question group
  content.items = _.where(content.items, {questionGroup:questionGroup});
  
  //attach response groups to questions
  var responses_collection = JSON.parse(localStorage['question-responses']);

  _.each(content.items, function(el,idx){
      content.items[idx].responses = _.where(responses_collection, {responseGroupId: el.responseGroupId});
  });

  content.items = _.sortBy(content.items,"order");

	}
	else{
		content.items = [];
	}

 	return content.items

	}

  return content
  });
