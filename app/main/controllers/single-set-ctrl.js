'use strict';
angular.module('main')
    .controller('Single-setCtrl', function ($log, $scope, $stateParams, DeckbrewService, $q, $localForage, ionicToast) {

        $log.log('1Hello from your Controller: Single-setCtrl in module main:. This is your controller:', this);

        // $scope.setCode = $stateParams.setCode;
        $scope.cards = [];
        $scope.page = 0;
        $scope.thereAreMoreCards = true;

        // $scope.finishedSet = $localForage.getItem($stateParams.setCode);

        $scope.nums = [1, 2, 3, 4];
        $scope.deta = [5, 6, 7];
        $scope.array = {};
        function activateSetCode () {
            $localForage.getItem($stateParams.setCode).then(function (data) {

                $log.log('teststs');
                $log.log(data);
                $scope.finishedSet = data;
                // $log.log(data);
                // $localForage.getItem('myName').then(function (data) {
                //     $log.log(data);
                //     var myName = data;
                // });

            });
        };

        activateSetCode();
        //OFF FOR NOW
        // activateAPI();

        $scope.loadMore = function () {

            // //TODO: reAdded when putting back API
            // if($scope.thereAreMoreCards) {
            //     $scope.page++;
            //     return getCardsFromService($scope.setCode, $scope.page).then(function (data) {
            //         $log.info('Requesting more cards');
            //         // $log.info(data);
            //         // // $log.info(data.data);
            //         // $log.info($scope.cards);
            //         if(data) {
            //             $log.info('Valid data');
            //             // var result = result.concat(data);
            //             // $scope.cards.push(data); //this just shows  1 card image
            //
            //             $scope.cards = $scope.cards.concat(data);
            //             // $scope.nums.push($scope.deta);
            //
            //             // $scope.nums += $scope.deta;
            //
            //         } else {
            //             $log.info('No Data');
            //             $scope.thereAreMoreCards = false;
            //
            //         }
            //         // $scope.$broadcast('scroll.infiniteScrollComplete');
            //
            //     });
            // }

            $scope.thereAreMoreCards = false;

            // if(!$scope.yelp.isLoading && $scope.yelp.hasMore) {
            //     $scope.yelp.next().then(function () {
            //         $scope.$broadcast('scroll.infiniteScrollComplete');
            //     });
            // }
        };

        $scope.setFinished = function () {
            $log.log('Clicked set finished!');
            console.log($scope.finishedSet);
            $localForage.setItem($stateParams.setCode, true).then(function (data) {
                // $log.log(data);
                // $localForage.getItem('myName').then(function (data) {
                //     $log.log(data);
                //     var myName = data;
                // });

                $scope.finishedSet = true;
            });


        };

        // $scope.test = function (item) {
        //     console.log('test');
        //     $localForage.getItem(item).then(function(data) {
        //         if(null){
        //             return false;
        //         } else {
        //             return true;
        //         }
        //     });
        // };

        $scope.save = function (item) {
            console.log('1');

            // $localForage.setItem('123123', '123132222')
            //     .then(function (value, err) {
            //             // we got our value
            //             $log.log('success');
            //             $log.log(value);
            //             $log.log(err);
            //         }
            //     ).catch(
            //     function (err) {
            //         $log.log('error');
            //         $log.log(err);
            //         // we got an error
            //     }
            // );
            $localForage.setItem(item, 'https://image.deckbrew.com/mtg/multiverseid/398411.jpg').then(function (data) {
                $log.log(data);

                //set ng-disabled to true
                //TODO: add ng-disabled check update!
                // $scope.nums[item].added = true;
                $scope.array[item] = true;
                ionicToast.show('Card saved', 'bottom', false, 1000);

                // $localForage.getItem(item).then(function(data) {
                //     $log.log(data);
                //     // var myName = data;
                // });
            });

        };

        $scope.share = function () {
            console.log('2');

            $localForage.setItem('myName', 'Olivier Combe').then(function (data) {
                // $log.log(data);
                $localForage.getItem('myName').then(function (data) {
                    $log.log(data);
                    var myName = data;
                });
            });

            // $log.log($localForage.driver());
            // $log.log($localForage.length());

        };

        function activateAPI () {
            $scope.setCode = $stateParams.setCode;

            //check if set was marked finished


            //fetch cards from API
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
