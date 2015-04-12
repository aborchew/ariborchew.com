'use strict';

angular.module('ariborchewcomApp')
  .config(function ($stateProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
      
  })
  .value('duScrollOffset', 70)
  .value('duScrollGreedy', true)