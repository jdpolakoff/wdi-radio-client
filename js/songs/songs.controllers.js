angular
.module('wdi-radio')
.controller('SongIndexController', [
  '$state',
  'Song',
  SongIndexControllerFunction
])
.controller('SongShowController', [
  '$stateParams',
  'Song',
  SongShowControllerFunction
])
.controller('SongNewController', [
  '$state',
  'Song',
  SongNewControllerFunction
])

function SongIndexControllerFunction ($state, Song) {
  this.songs = Song.query()
  // this.newSong = new Song()
  // this.create = function () {
  //   this.newSong.$save(() => {
  //     $state.go('songIndex', {}, { reload: true })
  //   })
  // }
}

function SongShowControllerFunction ($stateParams, Song) {
  this.song = Song.get({id: $stateParams.id})
}

function SongNewControllerFunction ($state, Song) {
  this.newSong = new Song()
  this.create = function () {
    this.newSong.$save(() => {
      $state.go('songIndex', {}, { reload: true })
    })
  }
}
