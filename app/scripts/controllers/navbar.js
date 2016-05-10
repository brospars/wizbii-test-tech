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
    
    //empty session and redirect to login
    $scope.logout = function(){
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('currentUser');

        $location.path('/');
    };
    
    
});
