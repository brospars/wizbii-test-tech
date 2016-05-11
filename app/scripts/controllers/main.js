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
    
    //submit form
    $scope.login = function(){
        
        //check if data login are set
        if($scope.formData.login !== '' && $scope.formData.password !== ''){
            
            //call wizbii api for login
            wizbiiApiFactory.login($scope.formData.login, $scope.formData.password)
            // if success store user in session and redirect to dashboard
            .success(function(response) { 
                if(angular.isDefined(response['access-token'])){
                    sessionStorage.userToken = response['access-token'];
                    sessionStorage.currentUser = JSON.stringify(response.profile);
                    
                    $location.path('/dashboard');
                    
                }
            // if error display an error message
            }).error(function(response) {
                swal("Hum..", "Une erreur s'est produite", "error");
            });
            
        }
        
    };
    
});
