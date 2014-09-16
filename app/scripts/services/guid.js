'use strict';

/**
 * @ngdoc service
 * @name livewellApp.Guid
 * @description
 * # Guid
 * Service in the livewellApp.
 */
angular.module('adhdApp')
  .service('Guid', function Guid() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var guid = {};

    guid.S4 = function () {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
		}
 
		// then to call it, plus stitch in '4' in the third group
		guid.create = function() {
		  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
		}


		return guid


  });
