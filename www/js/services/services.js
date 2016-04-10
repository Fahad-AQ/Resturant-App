/**
 * Created by CuriousLabx on 10/15/2015.
 */
ionicApp.service('resturantService', function ($firebaseArray) {
     var vm = this;
     vm.user = null;
     vm.orders = [];
     vm.user = null;
     vm.resturantlist = null;
       vm.resturantlist = null;
       vm.resturantOrderName = null;
        var Orderref = new Firebase("https://login-authentication.firebaseio.com/Resturant/Orders");
    var ref = new Firebase("https://login-authentication.firebaseio.com/Resturant/Resturant list");
     vm.resturantlist =  $firebaseArray(ref);
      vm.resturantOrderlist =  $firebaseArray(Orderref);
     vm.addOrders = function(obj){
      vm.orders.push(obj)
     }
      vm.orderPlacment = function(obj){
          obj.user =  vm.user.facebook.displayName;
           obj.customerOrders =  vm.orders;
           vm.resturantOrderlist.$add(obj)
     }
   });



