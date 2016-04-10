/**
 * Created by CuriousLabx on 10/28/2015.
 */
ionicApp.controller('dashboardController', function ($state,resturantService,$timeout,$scope) {
       
        $scope.userName = ""
        $scope.resturantlist = "";
         $timeout(function(){$scope.userName = resturantService.user },500)   
    $timeout(function(){$scope.resturantlist = resturantService.resturantlist },500)   
    $scope.menulist = function (resturant) {
        console.log(resturant)
        resturantService.resturantOrderName = resturant;
        $state.go('app.menu-list')
    }
});