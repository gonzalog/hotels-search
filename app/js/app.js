const hotelsSearchApp = angular.module('hotelsSearchApp',
	['hotelsSearchControllers', 'hotelsSearchServices', 'hotelsSearchDirectives', 'rzModule'])

hotelsSearchApp.constant('HotelsApiURL', "https://chalo-hotels-api.herokuapp.com")