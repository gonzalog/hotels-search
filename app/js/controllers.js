const hotelsSearchControllers = angular.module('hotelsSearchControllers', []);

hotelsSearchControllers.controller('hotelsSearchCtrl', ['$scope', 'Hotels',
  function($scope, Hotels){
    $scope.bootstrap = () => {
      $scope.hotels = []

      $scope.currentSearch = {
        city: "Madrid",
        from: new Date(2016, 10, 16),
        upTo: new Date(2016, 10, 30),
        guests: 2
      }

      $scope.searchFilter = {}

      $scope.search()
    }

  	$scope.search = () => {
      Hotels.load($scope.currentSearch, (hotels) => $scope.hotels = hotels)
  	}

    $scope.shownHotels = () => {
      const nameFilter = ({ name }) => !$scope.searchFilter.name ||
        name.toLowerCase().match($scope.searchFilter.name.toLowerCase())
      
      return $scope.hotels.filter(nameFilter)
    }

    $scope.currentSearchToLocale = (field) => $scope.currentSearch[field].toLocaleDateString()

    $scope.fullPrice = ({ price, discount }) => Math.trunc((price * 100) / (100 - discount ))
  }]);
