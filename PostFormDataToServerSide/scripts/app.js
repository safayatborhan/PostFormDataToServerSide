/// <reference path="angular.js" />

var app = angular.module("myModule", ["myModule.controller", "ngRoute"]);   //to enable routing, insert ngRoute into the dependency


app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "Partial/PlayerList.html",
        controller: "mainController"
    })
    .when("/AddPlayer", {
        templateUrl: "Partial/PlayerAdd.html",
        controller: "playerController"
    })
    .otherwise({ redirectTo: "/" });
});