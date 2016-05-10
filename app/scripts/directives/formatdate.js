'use strict';

/**
 * @ngdoc directive
 * @name wizbiiTechTestApp.directive:formatDate
 * @description
 * # formatDate
 */
angular.module('wizbiiTechTestApp')
  .directive('formatDate', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          var date = new Date(attrs.date);
          var jours = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
          var mois = ['janvier','février','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
          
          element.text('le '+date.getDate()+' '+mois[date.getMonth()]+' '+date.getFullYear());
      }
    };
  });
