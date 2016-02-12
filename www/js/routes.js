angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signUp', {
      url: '/signup',
      templateUrl: 'templates/signUp.html',
      controller: 'signUpCtrl'
    })
        
      
    
      
        
    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'profileCtrl'
    })
        
      
    
      
        
    .state('visitors', {
      url: '/visitors',
      templateUrl: 'templates/visitors.html',
      controller: 'visitorsCtrl'
    })
        
      
    
      
        
    .state('profileStats', {
      url: '/stats',
      templateUrl: 'templates/profileStats.html',
      controller: 'profileStatsCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});