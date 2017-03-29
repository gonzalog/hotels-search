const hotelsSearchApp = angular.module('hotelsSearchApp',
	['hotelsSearchControllers', 'hotelsSearchServices', 'hotelsSearchDirectives'])

hotelsSearchApp.constant('HotelsApiURL', "https://chalo-hotels-api.herokuapp.com")