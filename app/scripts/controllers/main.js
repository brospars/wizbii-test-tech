'use strict';

/**
 * @ngdoc function
 * @name wizbiiTechTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wizbiiTechTestApp
 */
angular.module('wizbiiTechTestApp')
.controller('MainCtrl', function ($scope, $location, wizbiiApiFactory) {
    
    if(angular.isDefined(sessionStorage.userToken) && angular.isDefined(sessionStorage.currentUser)){
        $location.path('/dashboard');
    }
        
    $scope.login = function(){
        
        if($scope.formData.login !== '' && $scope.formData.password !== ''){
            
            wizbiiApiFactory.login($scope.formData.login, $scope.formData.password)
            .success(function(response) {
                if(angular.isDefined(response['access-token'])){
                    sessionStorage.userToken = response['access-token'];
                    sessionStorage.currentUser = JSON.stringify(response.profile);
                    
                    $location.path('/dashboard');
                    
                }
            }).error(function(response) {
                console.log(response);
            });
            
        }
        
    };
    
});
