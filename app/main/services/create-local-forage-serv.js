'use strict';
angular.module('main')
    .service('CreateLocalForage', function ($log, $localForage) {

        $log.log('Hello from your Service: CreateLocalForage in module main');
        var setCodes = $localForage.createInstance({
            name: 'setCodes',
            driver: 'localStorageWrapper'
        });

        var likedCards = $localForage.createInstance({
            name: 'likedCards',
            driver: 'localStorageWrapper'
        });
    })
.run(['CreateLocalForage', function (CreateLocalForage) {
    // $log.log('Running: CreateLocalForage');
}]);
