'use strict';

let app = angular.module('conversations', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  // $stateProvider
  //   .state('home', { url: '/', templateUrl: 'partials/home.html', controller: 'homeCtrl'})
  //   .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})
  //   .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl'})


    $authProvider.github({
      clientId: '38f910775b611cbd28de'
    });

    $authProvider.facebook({
      clientId: '128035220896583'
    });
});
