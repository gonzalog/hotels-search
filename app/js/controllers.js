const hotelsSearchControllers = angular.module('hotelsSearchControllers', []);

hotelsSearchControllers.controller('hotelsSearchCtrl', ['$scope', 'Hotels',
  function($scope, Hotels){
    $scope.bootstrap = () => {
      $scope.currentSearch = {
        city: "Madrid",
        from: new Date(2016, 10, 16),
        upTo: new Date(2016, 10, 30),
        guests: 2
      }

      $scope.search()
    }

  	$scope.search = () => {
      Hotels.load($scope.currentSearch, (hotels) => $scope.hotels = hotels)
  	}

    $scope.currentSearchToLocale = (field) => $scope.currentSearch[field].toLocaleDateString()
  }]);
