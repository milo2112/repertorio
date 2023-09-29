const fs = require('fs')

const getSongs = () => {
  return JSON.parse(fs.readFileSync('./data/repertorio.json', 'utf-8'))
}

const setSongs = (songs) => {
  fs.writeFileSync('./data/repertorio.json', JSON.stringify(songs))
}

const createSong = (song) => {
  const songs = getSongs()
  songs.push(song)
  setSongs(songs)
  return 'Canción agregada...'
}

const readSongs = () => getSongs()

const updateSong = (id, modifySong) => {
  id = Number(id)
  const retrievedSongs = getSongs()
  console.log(retrievedSongs)
  const indexSong = retrievedSongs.findIndex((song) => song.id === id)
  retrievedSongs[indexSong] = {
    id,
    ...modifySong
  }
  setSongs(retrievedSongs)
}

module.exports = {
  readSongs,
  createSong,
  updateSong
}
