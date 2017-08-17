angular
.module('wdi-radio')
.controller('SongIndexController', [
  'Song',
  SongIndexControllerFunction
])
.controller('SongShowController', [
  '$stateParams',
  'Song',
  SongShowControllerFunction
])

function SongIndexControllerFunction (Song) {
  this.songs = Song.query()
}

function SongShowControllerFunction ($stateParams, Song) {
  this.song = Song.get({id: $stateParams.id})
}
