'use strict';

/**
 * @ngdoc function
 * @name wizbiiTechTestApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the wizbiiTechTestApp
 */
angular.module('wizbiiTechTestApp')
.controller('DashboardCtrl', function ($scope, $location, wizbiiApiFactory) {
    
    if(angular.isDefined(sessionStorage.userToken) && angular.isDefined(sessionStorage.currentUser)){
        
        wizbiiApiFactory.dashboard()
        .success(function(response) {
            console.log(response);
            $scope.feedItems = response['feed_items']['feed_items'];
            console.log($scope.feedItems);
        }).error(function(response) {
            console.log(response);
        });
        
        $scope.currentUser = JSON.parse(sessionStorage.currentUser);
        
    }else{
        $location.path('/');
    }
    
    $scope.formatText = function(text){
        text = text.replace(/\n/g, "<br/>");
        
        var urlRegex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g;
        
        return text.replace(urlRegex, function(url) {
            return '<a href="' + url + '">' + url + '</a>';
        });
    };
    
    $scope.getPosterAvatar = function(publication){
        var posterType = publication['poster_type'];
        
        if(posterType == 'COMPANY'){
            return publication.company.logo;
        }else if(posterType == 'PROFILE'){
            return publication.profile.avatar;
        }
        
        return '';
    };
    
});
