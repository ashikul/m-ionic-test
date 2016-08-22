'use strict';
angular.module('main')
    .controller('All-setsCtrl', function ($scope, $log, CardSetsService) {

        // $scope.cardSets = CardSetsService.getCards();
        //
        // console.log('mycardsetsdata');
        // console.log($scope.cardSets);

        $log.log('Hello from your Controller: All-setsCtrl in module main:. This is your controller:', this);

        $scope.cardSets = {};

        activate();
        console.log($scope.cardSets);

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
