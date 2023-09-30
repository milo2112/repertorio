require('dotenv').config()
const fs = require('fs')
const express = require('express')
const { readSongs, updateSong, createSong, deleteSong } = require('./crud')

const PORT = process.env.PORT ?? 3000

const app = express()

app.use(express.json())

app.get('/', (_, res) => {
  const contentHtml = fs.readFileSync('./public/index.html', 'UTF-8')
  res.status(200).end(contentHtml)
})

app.get('/canciones', (_, res) => res.status(200).json(readSongs()))

app.post('/canciones', (req, res) => res.status(201).json(createSong(req.body)))

app.put('/canciones/:id', (req, res) => {
  const { id } = req.params
  const { titulo, artista, tono } = req.body
  res.status(200).json(updateSong(Number(id), { titulo, artista, tono }))
})

app.delete('/canciones/:id', (req, res) => {
  const { id } = req.params
  res.status(200).json(deleteSong(Number(id)))
})

app.all('*', (_, res) => res.status(404).json({ code: 404, message: 'Page not found...' }))

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}`))
