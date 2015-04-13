'use strict';

/**
 * @ngdoc function
 * @name aborchewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aborchewApp
 */
angular.module('aborchewApp')
  .controller('MainCtrl', function ($scope) {

    $scope.sections = [
  		{
  			'label': 'Skills',
  			'name': 'skills'
  		},
  		{
  			'label': 'Interests',
  			'name': 'interests'
  		},
  		{
  			'label': 'Background',
  			'name': 'background'
  		},
  		{
  			'label': 'Experience',
  			'name': 'experience'
  		},
  		{
  			'label': 'Contact',
  			'name': 'contact'
  		}
  	]

  });
