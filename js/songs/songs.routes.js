 /* global angular */

angular
.module('wdi-radio')
.config([
'$stateProvider',
'$locationProvider',
'$urlRouterProvider',
  RouterFunction
  ])

function RouterFunction ($stateProvider, $locationProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode(true)
    $stateProvider
      .state('songIndex', {
        url: '/songs',
        templateUrl: 'js/songs/songs.index.html',
        controller: 'SongIndexController',
        controllerAs: 'vm'
      })
      .state('songNew', {
        parent: 'songIndex',
        url: '/new',
        templateUrl: 'js/songs/songs.new.html',
        controller: 'SongNewController',
        controllerAs: 'vm'
      })
      .state('songShow', {
        url: '/songs/:id',
        templateUrl: 'js/songs/songs.show.html',
        controller: 'SongShowController',
        controllerAs: 'vm'
      })
      $urlRouterProvider.otherwise('/songs')
      }
