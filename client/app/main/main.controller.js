'use strict';

angular.module('ariborchewcomApp')
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
