const fs = require('fs')

const getSongs = () => {
  return JSON.parse(fs.readFileSync('./data/repertorio.json', 'utf-8'))
}

const setSongs = (songs) => {
  fs.writeFileSync('./data/repertorio.json', JSON.stringify(songs))
}

const createSong = (song) => {
  const songs = getSongs()
  // console.log(`antes del push -> ${songs}`)
  // console.log(songs.id)
  const { cancion } = song
  // console.log(`\nid-->${id} - is type of: ${typeof id}\n`)
  console.log(cancion)
  songs.push(song)
  // console.log(`despues del push -> ${songs}`)
  // console.log(songs)
  setSongs(songs)
  return 'Canción agregada...'
}

const readSongs = () => getSongs()

const updateSong = (id, modifiedSong) => {
  // id = Number(id)
  console.log(id)
  const retrievedSongs = getSongs()
  console.log(retrievedSongs)
  console.log('INICIO->modifiedSong')
  console.log(modifiedSong)
  console.log('FIN->modifiedSong\n')
  const indexSong = retrievedSongs.findIndex((song) => song.id === id)
  retrievedSongs[indexSong] = {
    id,
    ...modifiedSong
  }
  console.log('INICIO->retrievedSongs')
  console.log(retrievedSongs)
  console.log('FIN->retrievedSongs\n')
  setSongs(retrievedSongs)
}

const deleteSong = (id) => {
  id = Number(id)
  const retrievedSongs = getSongs()
  // console.log(retrievedSongs)
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
