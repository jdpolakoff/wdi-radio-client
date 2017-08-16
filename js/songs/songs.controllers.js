angular
.module('wdi-radio')
.controller('SongIndexController', [
  'Song',
  SongIndexControllerFunction
])

function SongIndexControllerFunction (Song) {
  this.songs = Song.query()
}
