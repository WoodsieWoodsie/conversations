'use strict';

angular.module('conversations')
.controller('homeCtrl', function($scope, $auth) {

  $scope.logout = function() {
    $auth.logout(provider);
  };

});