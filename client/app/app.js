'use strict';

angular.module('ariborchewcomApp', [
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'duScroll'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

  })