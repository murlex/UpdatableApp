/* global StatusBar */
/// <reference path="../../typings/cordova/cordova.d.ts"/>
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var myapp = angular.module('starter', ['ionic']);

myapp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
});

myapp.config(function($stateProvider, $urlRouterProvider) {
  
 $stateProvider.state('start', {
    url: "/",
    abstract: false,
    templateUrl: "templates/start.html",
    controller: 'TestCtrl'
  });
  $urlRouterProvider.otherwise('/');  
});
