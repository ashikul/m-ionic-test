'use strict';
angular.module('main')
    .service('DeckbrewService', function ($q, $log, $http) {

        $log.log('Hello from your Service: DeckbrewService in module main');

        //returns image URL only? nah

        this.getCardsBySetandPage = function (cardSet, page) {
            var deferred = $q.defer();
            var url = 'https://api.deckbrew.com/mtg/cards?set=' + cardSet + '&page=' + page;
            $log.log('API CALL ' + url);
            return $http.get(url)
                .success(function (data) {
                    $log.log('DeckBrew getCardsBySetandPage success!!');
                    deferred.resolve();
                })
                .error(function (data, status, headers, config) {
                    $log.log('Deckbrew getCardsBySetandPage error!!');
                    deferred.reject(data);
                });

        }
    });
