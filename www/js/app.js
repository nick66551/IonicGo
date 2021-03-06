
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('IonicGo', ['ionic', 
  'ngCordova',
  'angular-cache',
  'firebase',
  'nvd3',
  'nvChart',
  'cb.x2js',
  'IonicGo.controllers',
  'IonicGo.services',
  'IonicGo.filter',
  'IonicGo.directives'

  ])

.run(function($ionicPlatform,$rootScope,userCacheService) {
  $ionicPlatform.ready(function() {

    if(userCacheService.keys().length !=0){
      $rootScope.currentUser = userCacheService.get(userCacheService.keys())
    console.log(userCacheService.keys())
    }
    else{
      $rootScope.currentUser = "";
    }

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleHex("#ffffff");
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.mystocks', {
      url: '/my-stock',
      views: {
        'menuContent': {
          templateUrl: 'templates/my-stocks.html',
          controller: 'MyStockCtrl'
        }
      }
    })

  .state('app.stock', {
    url: '/:stockticker',
    views: {
      'menuContent': {
        templateUrl: 'templates/stock.html',
        controller: 'StockCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/my-stocks');
});
