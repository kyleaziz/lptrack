'use strict';

//Userstats service used to communicate Userstats REST endpoints
angular.module('userstats').factory('Userstats', ['$resource',
	function($resource) {
		return $resource('userstats/:userstatId', { userstatId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);