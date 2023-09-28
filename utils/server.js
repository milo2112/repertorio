require('dotenv').config()
const fs = require('fs')
const express = require('express')
const { readSongs, updateSong, createSong } = require('./crud')

const PORT = process.env.PORT ?? 3000

const app = express()

app.use(express.json())
/*
El servidor deberá disponibilizar las siguientes rutas:
OK    ● POST    /canciones :      Recibe los datos correspondientes a una canción y la agrega al repertorio.
OK    ● GET     /canciones :      Devuelve un JSON con las canciones registradas en el repertorio
OK    ● PUT     /canciones/:id :  Recibe los datos de una canción que se desea editar y la actualiza manipulando el JSON local.
    ● DELETE  /canciones/:id :  Recibe por queryString el id de una canción y la elimina del repertorio.
*/
app.get('/', (_, res) => {
  const contentHtml = fs.readFileSync('./public/index.html', 'UTF-8')
  res.status(200).end(contentHtml)
})

app.get('/canciones', (_, res) => res.status(200).json(readSongs()))

app.post('/canciones', (req, res) => res.status(201).send(createSong(req.body)))

app.put('/canciones/:id', (req, res) => res.status(200).json(updateSong(req.params.id, req.body)))

app.all('*', (_, res) => res.status(404).json({ code: 404, message: 'Page not found...' }))

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}`))
