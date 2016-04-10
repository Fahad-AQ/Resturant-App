/**
 * Created by CuriousLabx on 10/27/2015.
 */
ionicApp.controller('loginController', function (resturantService,$timeout,$ionicPopup,$scope,$state) {
    $scope.userId = '123';
    $scope.userName = '123';
      var ref = new Firebase("https://login-authentication.firebaseio.com/Resturant/user");
    $scope.facebookLogin = function() {
  ref.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);                  
                  $timeout( function(){ resturantService.user = authData}, 500);
                  ref.push(authData)              
                    $state.go('app.dashboard')
                }
                });
     }
     });