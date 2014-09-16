// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller('MyCtrl', function($scope, $ionicSlideBoxDelegate) {

    $scope.cash = 378;
    $scope.array = [];
    
    $scope.calculate = function(cash) {
      var hundreds = Math.floor(cash / 100);
      var cash = cash % 100;
      if (cash > 50) {
        var fifties = Math.floor(cash / 50);
        cash = cash % 50;
      }
        
      var tens = Math.floor(cash / 10);
      cash = cash % 10;    
      
      for (var i = 0; i < hundreds; i++) {
        $scope.array.push({'value':'hundred', 'numberValue':100});
      }
      for (var j = 0; j < fifties; j++) {
        $scope.array.push({'value':'fifty', 'numberValue':50});
      }
        for (var k = 0; k < tens; k++) {
        $scope.array.push({'value':'ten', 'numberValue':10});
      }
    }
    
    $scope.slideIndex = 0;
    $scope.onTable = [];
    
    $scope.notes = $scope.calculate($scope.cash);

    $scope.add = function() {
        $scope.backup = $scope.array;
        $scope.onTable.push($scope.array[$scope.slideIndex]);
        $scope.array.splice($scope.slideIndex,1);
        $ionicSlideBoxDelegate.update();
        console.log($scope.onTable);
    }
    
    $scope.returnnote = function() {
        $scope.array.push($scope.onTable[$scope.onTable.length - 1]);
        $scope.onTable.splice($scope.onTable.length - 1,1);
        $ionicSlideBoxDelegate.update();

    }

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };
    
    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
});
