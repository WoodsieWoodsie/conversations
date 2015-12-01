'use strict';

angular.module('conversations')
.controller('conversationCtrl', function($scope, $auth, $state) {
  if (!$auth.isAuthenticated()){
    return $state.go('home');
  }
  $scope.logout = function() {
    $auth.logout();
    $state.go('home');
  };
});