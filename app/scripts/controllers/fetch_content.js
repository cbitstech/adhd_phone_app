'use strict';

/**
 * @ngdoc function
 * @name adhdApp.controller:FetchContentCtrl
 * @description
 * # FetchContentCtrl
 * Controller of the adhdApp
 */
angular.module('adhdApp')
  .controller('FetchContentCtrl', function ($scope, $http) {

 	var SERVER_LOCATION = 'http://localhost:2403/';
 	
 	var APP_COLLECTIONS = [
 		{label:'Questions', route:'questions'},
 		{label:'Question Responses', route:'question-responses'}
	];
 	
 	var USER_ID = 'adhd';

 	$scope.lastUpdated = localStorage['lastUpdated'] || 'not yet updated';

 	$scope.questionUpdateLabel = 'Download Latest Assessment';

 	var downloadContent = function(app_collections){
 		_.each(app_collections,function(el){
 			$http.get(SERVER_LOCATION + el.route + "?userId=" + USER_ID)
 			.success(function(response) {
 				localStorage[el.route] = JSON.stringify(response);
 				localStorage['lastUpdated'] = new Date();
 				$("#update-summary").append("<div class='alert alert-sm alert-success'>Updating " + el.label + ' successful!</div>');
 			}
 			).error(function(err) {
 				$("#update-summary").append("<div class='alert alert-sm alert-danger'>Unable to update " + el.label)
 			});
 		})
 	}

 	$scope.fetchContent = function(){
 		downloadContent(APP_COLLECTIONS);
 	}

  });
