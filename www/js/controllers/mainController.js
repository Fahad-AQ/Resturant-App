/**
 * Created by CuriousLabx on 10/27/2015.
 */
ionicApp.controller('mainController', function (resturantService,$timeout,$ionicPopup,$scope,$state) {

      var ref = new Firebase("https://login-authentication.firebaseio.com/Resturant/user");
    $scope.logout = function() {
      ref.unauth();
      resturantService.user = null;
       $state.go('login')
     }
     });