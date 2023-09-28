const fs = require('fs')

const getSongs = () => {
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

const readSongs = () => getSongs()

const updateSong = (id, modifySong) => {
  id = Number(id)
  const songsRetrieved = getSongs()
  const indexSong = songsRetrieved.findIndex((song) => song.id === id)
  songsRetrieved[indexSong] = {
    id,
    ...modifySong
  }
  setSongs(songsRetrieved)
}

module.exports = {
  readSongs,
  createSong,
  updateSong
}
