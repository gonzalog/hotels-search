var hotelsSearchServices = angular.module('hotelsSearchServices', []);

hotelsSearchServices.factory('Hotels', ['$http',
  function($http){
    return {
      get: function(callback) {
      }
    }
  }]);
