const fs = require('fs')

const readSongs = () => {
  return JSON.parse(fs.readFileSync('./data/repertorio.json', 'utf-8'))
}

const setSongs = (songs) => {
  fs.writeFileSync('./data/repertorio.json', JSON.stringify(songs))
}

const createSong = (song) => {
  const songs = readSongs()
  songs.push(song)
  setSongs(songs)
  return 'Canción agregada...'
}

module.exports = {
  readSongs,
  createSong
}
