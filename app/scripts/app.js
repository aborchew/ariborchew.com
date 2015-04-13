'use strict';

/**
 * @ngdoc overview
 * @name aborchewApp
 * @description
 * # aborchewApp
 *
 * Main module of the application.
 */
angular
  .module('aborchewApp', [
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .value('duScrollOffset', 130)
  // .value('duScrollGreedy', true)