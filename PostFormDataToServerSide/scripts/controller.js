/// <reference path="angular.js" />

angular.module("myModule.controller", []).controller("playerController", function ($scope, PlayerService) {  //this controller is for posting data
    $scope.message = "This is player controller";
    $scope.AddPlayer = function () {
        PlayerService.addPlayerToDB($scope.Player);   //$scope.Player > the Player is ng-model Player, we have used class instead of using just the attribute
    }

})
    .controller("mainController", function ($scope, PlayerService) {   //this controller is for getting data
        $scope.message = "This is main controller";
        PlayerService.GetPlayersFromDB().then(function (d) {
            $scope.ListOfPlayers = d.data.list;
        })
    })    
    .factory("PlayerService", ['$http', function ($http) {
        var fac = {};

        //this function get data from the server

        fac.GetPlayersFromDB = function () {
            return $http.get("/Player/GetPlayer")
        }
    //this function post data to the server
    fac.addPlayerToDB = function (player) {
        $http.post("/Player/AddPlayer", player).success(function (response) {    //Player/AddPlayer is the conventional routing of mvc with .net. Here player is controller and AddPlayer is method
            alert(response.status);
        })
    }

    return fac;
}])