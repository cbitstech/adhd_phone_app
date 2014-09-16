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

 	localStorage['questions'] = JSON.stringify([{"content":"Over the past week, how often have you been bothered by FEELING DOWN, DEPRESSED, OR HOPELESS?","order":2,"questionDataLabel":"phq2","questionGroup":"phq9","required":"required","responseGroupId":"phq9","type":"radio","id":"07189e9eea498a07"},{"content":"Over the past week, how often have you been bothered by a POOR APPETITE OR OVEREATING?","order":5,"questionDataLabel":"phq5","questionGroup":"phq9","required":"required","responseGroupId":"phq9","type":"radio","id":"d4c04f0d4f0e0bc7"},{"content":"Over the past week, how often have you been bothered by FEELING BAD ABOUT YOURSELF - OR THAT YOU ARE A FAILURE OR HAVE LET YOURSELF OR YOUR FAMILY DOWN?","order":6,"questionDataLabel":"phq6","questionGroup":"phq9","required":"required","responseGroupId":"phq9","type":"radio","id":"a1d7af08b11de878"},{"content":"Over the past week, how often have you been bothered by TROUBLE CONCENTRATING ON THINGS, SUCH AS READING THE NEWSPAPER OR WATCHING TELEVISION?","order":7,"questionDataLabel":"phq7","questionGroup":"phq9","required":"required","responseGroupId":"phq9","type":"radio","id":"c317fef4e47308d2"},{"content":"Over the past week, how often have you been bothered by MOVING OR SPEAKING SO SLOWLY THAT OTHER PEOPLE COULD HAVE NOTICED? OR THE OPPOSITE - BEING SO FIDGETY OR RESTLESS THAT YOU HAVE BEEN MOVING AROUND A LOT MORE THAN USUAL?","order":8,"questionDataLabel":"phq8","questionGroup":"phq9","required":"required","responseGroupId":"phq9","type":"radio","id":"3144ed93440c28ec"},{"content":"Over the past week, how often have you been bothered by THOUGHTS THAT YOU WOULD BE BETTER OFF DEAD, OR OF HURTING YOURSELF?","order":9,"questionDataLabel":"phq9","questionGroup":"phq9","required":"required","responseGroupId":"phq9","type":"radio","id":"decf5d36ced538d0"},{"content":"Over the past week, how often have you been bothered by TROUBLE FALLING OR STAYING ASLEEP, OR SLEEPING TOO MUCH?","order":3,"questionDataLabel":"phq3","questionGroup":"phq9","required":"required","responseGroupId":"phq9","type":"radio","id":"2bbfc1e863d4b98a"},{"content":"Over the past week, how often have you been bothered by LITTLE INTEREST OR PLEASURE IN DOING THINGS?","order":1,"questionDataLabel":"phq1","questionGroup":"phq9","required":"required","responseGroupId":"phq9","responses":"{}","type":"radio","id":"f99a845eea530b2c"},{"content":"Over the past week, how often have you been bothered by FEELING TIRED OR HAVING LITTLE ENERGY?","order":4,"questionDataLabel":"phq4","questionGroup":"phq9","required":"required","responseGroupId":"phq9","type":"radio","id":"4632c4b2ab01d86a"},{"questionGroup":"phq9","order":0,"type":"html","content":"<h2>Welcome to the Weekly Check-In!</h2>","questionDataLabel":"","responseGroupId":"","required":"","id":"d485d4c8d859f8cc"},{"questionGroup":"amrs","order":1,"type":"radio","content":"Which statement best describes the way you have been feeling?","questionDataLabel":"amrs1","responseGroupId":"amrs1","required":"","id":"90c7b6d682c7187f"},{"content":"Which statement best describes the way you have been feeling?","order":2,"questionDataLabel":"amrs2","questionGroup":"amrs","responseGroupId":"amrs2","type":"radio","id":"430194fe140b18e8"},{"content":"Which statement best describes the way you have been feeling?","order":3,"questionDataLabel":"amrs4","questionGroup":"amrs","responseGroupId":"amrs4","type":"radio","id":"ba2637d288da182f"},{"content":"Which statement best describes the way you have been feeling?","order":4,"questionDataLabel":"amrs3","questionGroup":"amrs","responseGroupId":"amrs3","type":"radio","id":"23fae8ba4842c866"},{"content":"Which statement best describes the way you have been feeling?","order":5,"questionDataLabel":"amrs5","questionGroup":"amrs","responseGroupId":"amrs5","type":"radio","id":"53c964a687dff873"}]) ;
 	localStorage['question-responses'] = JSON.stringify([{"label":"Not at all","order":"1","responseGroupId":"phq9","responseGroupLabel":"phq9","value":"0","id":"6f04febc1dcd9901"},{"label":"Several days","order":"2","responseGroupId":"phq9","responseGroupLabel":"phq9","value":"1","id":"06baf3eab84568a9"},{"label":"More than half the days","order":"3","responseGroupId":"phq9","responseGroupLabel":"phq9","value":"2","id":"2255a56c9a5d7840"},{"label":"Nearly every day","order":"4","responseGroupId":"phq9","responseGroupLabel":"phq9","value":"3","id":"2b8171b28d4a9872"},{"label":" I often feel happier or more cheerful than usual.","order":"2","responseGroupId":"amrs1","responseGroupLabel":"amrs1","value":"1","id":"dcbcb90d9073f8b9"},{"label":" I feel happier or more cheerful than usual most of the time.","order":"3","responseGroupId":"amrs1","responseGroupLabel":"amrs1","value":"2","id":"e788aab4046c2bcb"},{"label":"I feel happier or more cheerful than usual all of the time.","order":"4","responseGroupId":"amrs1","responseGroupLabel":"amrs1","value":"3","id":"7e6bdf02e6c088d5"},{"label":"                            I occasionally feel happier or more cheerful than usual.","order":"1","responseGroupId":"amrs1","responseGroupLabel":"amrs1","value":"0","id":"8afbd4f2cb39a841"},{"label":" I occasionally feel more self-confident than usual.","order":"1","responseGroupId":"amrs2","responseGroupLabel":"amrs2","value":"0","id":"9b55a9e0c9e35a08"},{"label":" I often feel more self-confident than usual.","order":"2","responseGroupId":"amrs2","responseGroupLabel":"amrs2","value":"1","id":"3b32f497db74d831"},{"label":" I feel more self-confident than usual.","order":"3","responseGroupId":"amrs2","responseGroupLabel":"amrs2","value":"2","id":"b82d2f1d064b39f5"},{"label":" I feel extremely self-confident all of the time.","order":"4","responseGroupId":"amrs2","responseGroupLabel":"amrs2","value":" 3","id":"e9634a047324d807"},{"label":" I occasionally talk more than usual.","order":"1","responseGroupId":"amrs4","responseGroupLabel":"amrs4","value":"0","id":"248dd7f49401b816"},{"label":" I occasionally need less sleep than usual","order":"1","responseGroupId":"amrs3","responseGroupLabel":"amrs3","value":"0","id":"26daf6c957e1d83b"},{"label":" I frequently need less sleep than usual","order":"3","responseGroupId":"amrs3","responseGroupLabel":"amrs3","value":"2","id":"c6b337238dac09cb"},{"label":" I often need less sleep than usual","order":"2","responseGroupId":"amrs3","responseGroupLabel":"amrs3","value":"1","id":"a5938f5841d23a8d"},{"label":" I can go all day and night without any sleep and still not feel tired.","order":"4","responseGroupId":"amrs3","responseGroupLabel":"amrs3","value":"3","id":"dd04b42fb498a867"},{"label":" I talk constantly and cannot be interrupted.","order":"4","responseGroupId":"amrs4","responseGroupLabel":"amrs4","value":"3","id":"95c03e5561173858"},{"label":" I frequently talk more than usual.","order":"3","responseGroupId":"amrs4","responseGroupLabel":"amrs4","value":"2","id":"31d48584769878d1"},{"label":" I often talk more than usual.","order":"2","responseGroupId":"amrs4","responseGroupLabel":"amrs4","value":"1","id":"ee97165355d88836"},{"label":" I have occasionally been more active than usual.","order":"1","responseGroupId":"amrs5","responseGroupLabel":"amrs5","value":"0","id":"bbfc7642a646194e"},{"label":" I have often been more active than usual.","order":"2","responseGroupId":"amrs5","responseGroupLabel":"amrs5","value":"1","id":"d62f39be9109c8fe"},{"label":" I have frequently been more active than usual.","order":"3","responseGroupId":"amrs5","responseGroupLabel":"amrs5","value":"2","id":"d1c802de87aefa16"},{"label":" I am constantly active or on the go all the time.","order":"4","responseGroupId":"amrs5","responseGroupLabel":"amrs5","value":"3","id":"b1121bbd24aaf9e7"}]);

 	$scope.lastUpdated = localStorage['lastUpdated'] || '';

 	$scope.questionUpdateLabel = 'Download Latest Assessment';

 	// var downloadContent = function(app_collections){
 	// 	_.each(app_collections,function(el){
 	// 		$http.get(SERVER_LOCATION + el.route + "?userId=" + USER_ID)
 	// 		.success(function(response) {
 	// 			localStorage[el.route] = JSON.stringify(response);
 	// 			localStorage['lastUpdated'] = new Date();
 	// 			$("#update-summary").append("<div class='alert alert-sm alert-success'>Updating " + el.label + ' successful!</div>');
 	// 		}
 	// 		).error(function(err) {
 	// 			$("#update-summary").append("<div class='alert alert-sm alert-danger'>Unable to update " + el.label)
 	// 		});
 	// 	})
 	// }

 	// $scope.fetchContent = function(){
 	// 	downloadContent(APP_COLLECTIONS);
 	// }

  });
