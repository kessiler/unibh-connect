'use strict';
var uniBHConnect = angular.module('uniBHConnect', []);
uniBHConnect.controller('MainController', function ($scope) {
    $scope.currentUser = null;
    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };
});