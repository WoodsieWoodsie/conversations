'use strict';

angular.module('conversations')
.controller('navCtrl', function($scope, $auth, $state){
  $scope.isAuthenticated = function(){
    return $auth.isAuthenticated();
  };
  $scope.logout = function(){
    console.log("LOGOUT");
    $auth.logout();
    $state.go('home');
  }
});