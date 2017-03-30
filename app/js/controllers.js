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

      $scope.priceFilter = {
        minValue: 0,
        maxValue: 2000,
        options: {
          floor: 600,
          ceil: 4000,
          step: 1
        }
      }
    }

  	$scope.search = () => {
      Hotels.load($scope.currentSearch, (hotels) => $scope.hotels = hotels)
  	}

    $scope.shownHotels = () => {
      const nameFilter = ({ name }) => !$scope.searchFilter.name ||
        name.toLowerCase().match($scope.searchFilter.name.toLowerCase())

      const priceFilter = ({ price }) => price >= $scope.priceFilter.minValue &&
        price <= $scope.priceFilter.maxValue
      
      return $scope.hotels.filter(nameFilter).filter(priceFilter)
    }

    $scope.currentSearchToLocale = (field) => $scope.currentSearch[field].toLocaleDateString()

    $scope.fullPrice = ({ price, discount }) => Math.trunc((price * 100) / (100 - discount ))
  }]);
