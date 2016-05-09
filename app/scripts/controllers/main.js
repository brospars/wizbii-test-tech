'use strict';

/**
 * @ngdoc function
 * @name wizbiiTechTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wizbiiTechTestApp
 */
angular.module('wizbiiTechTestApp')
.controller('MainCtrl', function ($scope, wizbiiApiFactory) {
        
    $scope.login = function(){
        if($scope.formData.login !== '' && $scope.formData.password !== ''){
            wizbiiApiFactory.login($scope.formData.login, $scope.formData.password)
            .success(function(response) {
                console.log('success');
                console.log(response);
            }).error(function(response) {
                console.log('error');
                console.log(response);
            });
        }
    };
    
});
