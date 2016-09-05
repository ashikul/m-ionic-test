'use strict';
angular.module('mtgApp', [
  // load your modules here
  'main', // starting with the main module
  'LocalForageModule',
    // 'ngCordova'
    'ionic-toast'
]).config(['$localForageProvider', function($localForageProvider){
  $localForageProvider.setNotify(true, true); // itemSet, itemRemove
}]);
