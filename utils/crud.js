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

const updateSong = (id, modifiedSong) => {
  const retrievedSongs = getSongs()
  const indexSong = retrievedSongs.findIndex((song) => song.id === id)
  retrievedSongs[indexSong] = {
    id,
    ...modifiedSong
  }
  setSongs(retrievedSongs)
}

const deleteSong = (id) => {
  const retrievedSongs = getSongs()
  const indexSong = retrievedSongs.findIndex((song) => song.id === id)
  retrievedSongs.splice(indexSong, 1)
  setSongs(retrievedSongs)
}
module.exports = {
  readSongs,
  createSong,
  updateSong,
  deleteSong
}
