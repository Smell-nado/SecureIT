angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.garageStream', {
    url: '/StreamGarage',
    views: {
      'tab1': {
        templateUrl: 'templates/garageStream.html',
        controller: 'garageStreamCtrl'
      }
    }
  })

  .state('tabsController.yardStream', {
    url: '/StreamYard',
    views: {
      'tab2': {
        templateUrl: 'templates/yardStream.html',
        controller: 'yardStreamCtrl'
      }
    }
  })

  .state('tabsController.frontStream', {
    url: '/StreamFront',
    views: {
      'tab3': {
        templateUrl: 'templates/frontStream.html',
        controller: 'frontStreamCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('garage', {
    url: '/page5',
    templateUrl: 'templates/garage.html',
    controller: 'garageCtrl'
  })

  .state('yard', {
    url: '/page6',
    templateUrl: 'templates/yard.html',
    controller: 'yardCtrl'
  })

  .state('front', {
    url: '/page7',
    templateUrl: 'templates/front.html',
    controller: 'frontCtrl'
  })

  .state('cameraStream', {
    url: '/page8',
    templateUrl: 'templates/cameraStream.html',
    controller: 'cameraStreamCtrl'
  })

  .state('configure', {
    url: '/page11',
    templateUrl: 'templates/configure.html',
    controller: 'configureCtrl'
  })

  .state('videos', {
    url: '/page10',
    templateUrl: 'templates/videos.html',
    controller: 'videosCtrl'
  })

  .state('configureGarage', {
    url: '/page12',
    templateUrl: 'templates/configureGarage.html',
    controller: 'configureGarageCtrl'
  })

  .state('configureYard', {
    url: '/page13',
    templateUrl: 'templates/configureYard.html',
    controller: 'configureYardCtrl'
  })

  .state('configureFront', {
    url: '/page14',
    templateUrl: 'templates/configureFront.html',
    controller: 'configureFrontCtrl'
  })

$urlRouterProvider.otherwise('/page8')

  

});