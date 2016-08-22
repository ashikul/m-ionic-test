'use strict';
angular.module('main', [
    'ionic',
    'ngCordova',
    'ui.router',
    // TODO: load other modules selected during generation
])
    .config(function ($stateProvider, $urlRouterProvider) {

        // ROUTING with ui.router
        $urlRouterProvider.otherwise('/main/list');
        $stateProvider
        // this state is placed in the <ion-nav-view> in the index.html
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'main/templates/menu.html',
                controller: 'MenuCtrl as menu'
            })
            .state('main.list', {
                url: '/list',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.home', {
                url: '/home',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/home.html',
                        controller: 'HomeCtrl as ctrl'
                    }
                }
            })
            .state('main.allSets', {
                url: '/allSets',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/all-sets.html',
                        controller: 'All-setsCtrl as ctrl'
                    }
                }
            })
            //TODO: pass a parameter here
            .state('main.singleSet', {
                url: '/singleSet',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/single-set.html',
                        controller: 'Single-setCtrl as ctrl'
                    }
                }
            })
            .state('main.likedCards', {
                url: '/likedCards',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/liked-cards.html',
                        controller: 'Liked-cardsCtrl as ctrl'
                    }
                }
            })
            .state('main.options', {
                url: '/options',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/options.html',
                        controller: 'OptionsCtrl as ctrl'
                    }
                }
            })

            .state('main.about', {
                url: '/about',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/about.html',
                        controller: 'AboutCtrl as ctrl'
                    }
                }
            })
            .state('main.listDetail', {
                url: '/list/detail',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list-detail.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.debug', {
                url: '/debug',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/debug.html',
                        controller: 'DebugCtrl as ctrl'
                    }
                }
            });
    });
