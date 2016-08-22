'use strict';
angular.module('main')
.service('CardSetsService', function ($q, $log, $http) {







  $log.log('Hello from your Service: CardSetsService in module main');
  
  
  this.getCards = function () {
    var deferred = $q.defer();


    return $http.get('main/assets/data/mtg-sets.json')
        .success(function (data) {
          console.log('success!');
          console.log(data);

          // if (data.businesses.length == 0) {
          //   self.hasMore = false;
          // } else {
          //   angular.forEach(data.businesses, function (business) {
          //     self.results.push(business);
          //   });
          // }

          // self.isLoading = false;
          deferred.resolve();
        })
        .error(function (data, status, headers, config) {
          console.log('error!');
          // self.isLoading = false;
          deferred.reject(data);
        });
    
    
  }
  
  
  

});
