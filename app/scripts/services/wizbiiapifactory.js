'use strict';

/**
 * @ngdoc service
 * @name wizbiiTechTestApp.wizbiiApiFactory
 * @description expose the wizbii API in my app
 * # wizbiiApiFactory
 * Factory in the wizbiiTechTestApp.
 */
angular.module('wizbiiTechTestApp')
.factory('wizbiiApiFactory', function ($http) {
    
    var wizbiiFactory = {};

    wizbiiFactory.login = function (login, password) {
        
        var req = {
            method: 'POST',
            url: 'https://api.wizbii.com/v1/account/validate',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: { 
                username: login,
                password: password,
                client_id: 'test',
                grant_type: 'password'
            }
        };
        
        return $http(req);
    };

    wizbiiFactory.dashboard = function (token) {
        
        var req = {
            method: 'POST',
            url: 'https://api.wizbii.com/v2/dashboard/',
            headers: {
                'Authorization': token
            },
            data: { 
                direction: 'newest'
            }
        };
        
        return $http(req);
    };
    
    return wizbiiFactory;
});
