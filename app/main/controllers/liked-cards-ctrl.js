'use strict';
angular.module('main')
    .controller('Liked-cardsCtrl', function ($log, $localForage, $scope) {

        $log.log('Hello from your Controller: Liked-cardsCtrl in module main:. This is your controller:', this);

        var likedCards = $localForage.instance('likedCards');
        $scope.cards = [];
        function activateLikedCards () {
            $log.log('Getting LikedCards');
            likedCards.keys().then(function (data) {

                    angular.forEach(data, function (value, key) {
                        likedCards.getItem(value).then(function (data) {

                            $scope.cards.push({key: value, value: data});
                            $log.log($scope.cards);
                        });
                        // $scope.cards.push(likedCards.getItem(data[key]));
                    });
                    // $scope.cards = data;

                }
            );
        }

        // activateLikedCards();

        $scope.$on("$ionicView.beforeEnter", function (event, data) {
            // handle event
            // $log.log('~~~before enter');
            activateLikedCards();

        });

        $scope.delete = function (item, index) {

            console.log('2');
            likedCards.removeItem(item.key);
            $scope.cards.splice(index, 1);

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

    });
