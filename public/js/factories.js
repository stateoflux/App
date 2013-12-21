app.module('mean.dashboard')

.factory('fitbit', function($http, $location) {
  var services = {
    auth: function() {
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:8000/auth/fitbit'
      });
    }
  };
  return services;
})