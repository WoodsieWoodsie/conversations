'use strict';

angular.module('conversations')
.controller('conversationCtrl', function($scope, $auth, $state, $http) {
  if (!$auth.isAuthenticated()){
    return $state.go('home');
  }
  $scope.logout = function() {
    $auth.logout();
    $state.go('home');
  };

  $http.get('/users')
  .then(function(res){
    $scope.users = res.data;
    console.log($scope.users);
  }, function(err){
    console.error(err);
  });
});