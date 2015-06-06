/// <reference path="../../typings/angularjs/angular.d.ts"/>


myapp.controller('TestCtrl', function($scope, $http, SelfUpdateService) {
    $http.get("http://jsonplaceholder.typicode.com/posts/1")    
        .success(function (data, status, headers, config) {
        $scope.title = data.title;
    })
        .error(function (data) {
        $scope.title = "Error: " + data;
    });
    
    SelfUpdateService.ensureUpdated();
    window.BOOTSTRAP_OK = true;
    console.log("window.BOOTSTRAP_OK = true");
});