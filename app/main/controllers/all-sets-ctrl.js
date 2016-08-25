'use strict';
angular.module('main')
    .controller('All-setsCtrl', function ($scope, $log, CardSetsService) {

        $log.log('Hello from your Controller: All-setsCtrl in module main:. This is your controller:', this);

        $scope.cardSets = {};

        activate();

        function activate () {
            return getCards().then(function () {
                $log.info('Activated Card Sets');
            });
        }

        function getCards () {
            return CardSetsService.getCards().then(function (data) {
                $scope.cardSets = data.data;
                return $scope.cardSets;
            });
        }

    });
