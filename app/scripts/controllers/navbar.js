'use strict';

/**
 * @ngdoc function
 * @name wizbiiTechTestApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the wizbiiTechTestApp
 */
angular.module('wizbiiTechTestApp')
.controller('NavbarCtrl', function ($scope,$location) {
    
    $scope.logout = function(){
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('currentUser');

        $location.path('/');
    };
    
    
});
