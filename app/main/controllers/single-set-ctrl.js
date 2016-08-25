'use strict';
angular.module('main')
    .controller('Single-setCtrl', function ($log, $scope, $stateParams, DeckbrewService) {

        $log.log('1Hello from your Controller: Single-setCtrl in module main:. This is your controller:', this);

        // $scope.setCode = $stateParams.setCode;
        $scope.cards = [];
        $scope.page = 0;
        $scope.thereAreMoreCards = true;

        $scope.nums = [1, 2, 3, 4];
        $scope.deta = [5, 6, 7];

        //OFF FOR NOW
        activate();

        $scope.loadMore = function () {

            if($scope.thereAreMoreCards) {
                $scope.page++;
                return getCardsFromService($scope.setCode, $scope.page).then(function (data) {
                    $log.info('Requesting more cards');
                    // $log.info(data);
                    // // $log.info(data.data);
                    // $log.info($scope.cards);
                    if(data) {
                        $log.info('Valid data');
                        // var result = result.concat(data);
                        // $scope.cards.push(data); //this just shows  1 card image

                        $scope.cards = $scope.cards.concat(data);

                        // $scope.nums.push($scope.deta);

                        // $scope.nums += $scope.deta;

                    } else {
                        $log.info('No Data');
                        $scope.thereAreMoreCards = false;

                    }
                });
            }

            // if(!$scope.yelp.isLoading && $scope.yelp.hasMore) {
            //     $scope.yelp.next().then(function () {
            //         $scope.$broadcast('scroll.infiniteScrollComplete');
            //     });
            // }
        };

        $scope.setFinished = function () {
            $log.log('Clicked set finished!');

        }

        function activate () {
            $scope.setCode = $stateParams.setCode;
            return getCardsFromService($scope.setCode, $scope.page).then(function (data) {
                $log.info('Activated Card Sets');
                $scope.cards = data;
            });
        }

        function getCardsFromService (code, page) {
            return DeckbrewService.getCardsBySetandPage(code, page).then(function (data) {
                $log.log(data);
                // $scope.cards = data;

                // if(data.data ){
                return data.data;
                // } else {
                //     return false;
                // }
                // return data;
            });
        }

    });
