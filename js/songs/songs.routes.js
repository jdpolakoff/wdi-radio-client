 /* global angular */

angular
.module('wdi-radio')
.config([
'$stateProvider',
// '$locationProvider',
// '$urlRouterProvider'
  RouterFunction
  ])

function RouterFunction ($stateProvider) {
  // $locationProvider.html5mode(true)
    $stateProvider
      .state('songIndex', {
        url: '/songs',
        templateUrl: 'js/songs/songs.index.html',
        controller: 'SongIndexController',
        controllerAs: 'vm'
      })
      // $urlRouterProvider.otherwise('/songs')
      }
