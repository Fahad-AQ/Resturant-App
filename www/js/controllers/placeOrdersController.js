/**
 * Created by CuriousLabx on 10/27/2015.
 */
ionicApp.controller('placeOrdersController', function ($firebaseArray,resturantService,$timeout,$ionicPopup,$scope,$state) {
     
     $scope.ordersOwer = {};
      $scope.OrderPlacement = function (ordersOwer) {
          resturantService.orderPlacment(ordersOwer);
          
            $ionicPopup.alert({
                title: 'Order',
                template: 'Order Successfully'
            });
               $state.go('app.dashboard')
      }
     
     });