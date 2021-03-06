'use strict';
angular.module('main')
    .controller('Single-setCtrl', function ($log, $scope, $stateParams, DeckbrewService, $q, $localForage, ionicToast) {

        $log.log('1Hello from your Controller: Single-setCtrl in module main:. This is your controller:', this);

        // $scope.setCode = $stateParams.setCode;
        $scope.cards = [];
        $scope.page = 0;
        $scope.thereAreMoreCards = true;
        $scope.setTitle = $stateParams.setTitle;
        // $scope.finishedSet = $localForage.getItem($stateParams.setCode);

        var likedCards = $localForage.instance('likedCards');
        var setCodes = $localForage.instance('setCodes');

        // $scope.nums = [1, 2, 3, 4];
        // $scope.deta = [5, 6, 7];


        //used for disable checking
        // $scope.array = {};
        function activateSetCode () {
            setCodes.getItem($stateParams.setCode).then(function (data) {

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
        activateAPI();

        $scope.loadMore = function () {

            // //TODO: reAdded when putting back API
            if($scope.thereAreMoreCards) {
                $scope.page++;
                var g = getCardsFromService($scope.setCode, $scope.page).then(function (data) {
                    $log.info('Requesting more cards');
                    $log.info(data);
                    // // $log.info(data.data);
                    $log.info($scope.cards);
                    if(data.length > 0) {
                        $log.info('Valid data');
                        // var result = result.concat(data);
                        // $scope.cards.push(data); //this just shows  1 card image

                        $scope.cards = $scope.cards.concat(data);

                        // $scope.cards = data.concat($scope.cards);
                        // $scope.cards.push(data);
                        // $scope.$digest();

                        // $scope.nums.push($scope.deta);

                        // $scope.nums += $scope.deta;
                        // $scope.$broadcast('scroll.infiniteScrollComplete');
                        $scope.$broadcast('scroll.infiniteScrollComplete');
                    } else {
                        $log.info('No Data');
                        $scope.thereAreMoreCards = false;
                        $scope.$broadcast('scroll.infiniteScrollComplete');
                        // $scope.$broadcast('scroll.infiniteScrollComplete');

                    }
                    return;
                    // $scope.$broadcast('scroll.infiniteScrollComplete');

                });
            }
            // $scope.thereAreMoreCards = false;

            // if(!$scope.yelp.isLoading && $scope.yelp.hasMore) {
            //     $scope.yelp.next().then(function () {
            //         $scope.$broadcast('scroll.infiniteScrollComplete');
            //     });
            // }
        };

        $scope.setFinished = function () {
            $log.log('Clicked set finished!');
            // console.log($scope.finishedSet);
            setCodes.setItem($stateParams.setCode, true).then(function (data) {
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

        $scope.save = function (card) {
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
            likedCards.setItem(card.id, card).then(function (data) {
                $log.log(data);

                //set ng-disabled to true
                //TODO: add ng-disabled check update!
                // $scope.nums[item].added = true;
                // $scope.array[card] = true;
                ionicToast.show('Card saved', 'bottom', false, 1000);

                // $localForage.getItem(item).then(function(data) {
                //     $log.log(data);
                //     // var myName = data;
                // });
            });

        };

        $scope.share = function () {
            console.log('2');

            // likedCards.setItem('myName', 'Olivier Combe').then(function (data) {
            //     // $log.log(data);
            //     likedCards.getItem('myName').then(function (data) {
            //         $log.log(data);
            //         var myName = data;
            //     });
            // });

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
