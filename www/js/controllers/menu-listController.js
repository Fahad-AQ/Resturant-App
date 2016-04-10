/**
 * Created by CuriousLabx on 10/27/2015.
 */
ionicApp.controller('menu-listController', function ($firebaseArray,resturantService,$timeout,$ionicPopup,$scope,$state) {
      $scope.resturantName = "";
      $timeout(function(){$scope.resturantName = resturantService.resturantOrderName },500)   
     var ref = new Firebase("https://login-authentication.firebaseio.com/Resturant/Resturant list");
      $scope.resturantMenuArray = $firebaseArray(ref);
      
      $scope.addtoCard = function(items){
                    $ionicPopup.alert({
                title: 'Added',
                template: 'Add to Card Successfully'
            });
            
            items.resturantName =  $scope.resturantName;
           resturantService.addOrders(items) 
            console.log(resturantService.orders)
      }
           $scope.OrderPlacementState = function(){
               $state.go("app.placeOrders")
      }
      
     
      
     });