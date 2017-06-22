// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// angular.module('starter', ['ionic'])
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    
    $ionicConfigProvider.views.transition('none');
    
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'templates/news.html',
            controller: 'NewsCtrl'
        })
        .state('team', {
            url: '/team',
            templateUrl: 'templates/team.html',
            controller: 'TeamCtrl'
        })
        .state('schedule', {
            url: '/schedule',
            templateUrl: 'templates/schedule.html',
            controller: 'ScheduleCtrl'
        })
        .state('sponsors', {
            url: '/sponsors',
            templateUrl: 'templates/sponsors.html',
            controller: 'SponsorCtrl'
        })
        ;
});
