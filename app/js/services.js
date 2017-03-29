var hotelsSearchServices = angular.module('hotelsSearchServices', []);

hotelsSearchServices.factory('Hotels', ['$http', 'HotelsApiURL',
  function($http, HotelsApiURL){
    return {
      load: function({ count, city, from, upTo, guests }, callback) {
        const query = `query($city: String, $count: Int, $availability: AvailabilityInputType) { 
              hotels(count: $count, city: $city, availability: $availability) {
                name
                stars
                price
                imageUrl
                recommended
                discount
              } 
            }`

        const variables = {
          city: city,
          count: count,
          availability: { from, upTo, guests }
        }

        $http.post(HotelsApiURL, { query, variables }).success(({ data: { hotels } }) => callback(hotels))
      }
    }
  }]);
