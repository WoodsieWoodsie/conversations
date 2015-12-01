'use strict';

angular.module('conversations')
.controller('loginCtrl', function($scope, $auth, $state) {

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log(res);
      $state.go('conversations')
    })
    .catch(function(err){
      console.error(err);
    });
  };

});