'use strict';

/**
 * @ngdoc function
 * @name wizbiiTechTestApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the wizbiiTechTestApp
 */
angular.module('wizbiiTechTestApp')
.controller('DashboardCtrl', function ($scope, $location, $filter, wizbiiApiFactory) {
    
    //if user is set call dashboard api else redirect to login
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
    
    //Add a comment to a post
    $scope.postComment = function(){
        swal("Posté!", "Ton (faux) commentaire a été envoyé", "success");
    };
    
    //Add a like to a post
    $scope.likePost = function(postid){
        
        var newLike = {
            'date_created': new Date().toISOString(),
            'liker_id':$scope.currentUser.id,
            'liker_type':'profile',
            profile : $scope.currentUser
        };
        
        var post = $filter('filter')($scope.feedItems, {id: postid})[0];
        console.log('like '+postid);
        //Add like unless it's alreay liked (push directly into array not truly added)
        if(!$filter('filter')(post.publication.likes, {'liker_id': $scope.currentUser.id}).length > 0){
            post.publication.likes.push(newLike);
        }
    };
    
    //display a modal with share buttons
    $scope.sharePost = function(postid){
        var url = 'http://wizbii.com/publication/'+postid;
        swal({
          title: "Partager la publication",
          text: '<a href="http://twitter.com/share?url='+url+'" target="_blank" class="share-btn twitter"><i class="fa fa-twitter"></i></a>'+
                '<a href="https://plus.google.com/share?url='+url+'" target="_blank" class="share-btn google-plus"><i class="fa fa-google-plus"></i></a>'+
                '<a href="http://www.facebook.com/sharer/sharer.php?u=http://www.agori.fr/2016/05/09/le-projet-de-reforme-du-code-du-travail-en-discussion-au-parlement/" target="_blank" class="share-btn facebook"><i class="fa fa-facebook"></i></a>'+
                '<a href="http://www.linkedin.com/shareArticle?url='+url+'" target="_blank" class="share-btn linkedin"><i class="fa fa-linkedin"></i></a>',
          html: true
        });
    };
    
    //format post text with html and links
    $scope.formatText = function(text){
        text = text.replace(/\n/g, "<br/>");
        
        var urlRegex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g;
        
        return text.replace(urlRegex, function(url) {
            return '<a href="' + url + '">' + url + '</a>';
        });
    };
    
    //retrieve poster image (company or profile)
    $scope.getPosterAvatar = function(publication){
        var posterType = publication['poster_type'];
        
        if(posterType === 'COMPANY'){
            return publication.company.logo;
        }else if(posterType === 'PROFILE'){
            return publication.profile.avatar;
        }
        
        return '';
    };
    
});
