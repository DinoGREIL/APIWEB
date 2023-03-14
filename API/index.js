const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3002
const db = require('./queries')
const cors = require("cors");
const bcrypt = require("bcryptjs")
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/benevoles', db.getBenevoles)
  app.get('/benevoles/:id', db.getBenevoleById)
  app.post('/benevoles', db.createBenevole)
  app.put('/benevoles/:id', db.updateBenevole)
  app.delete('/benevoles/:id', db.deleteBenevole)

  app.get('/jeux', db.getJeux)
  app.get('/jeux/:id', db.getJeuById)
  app.post('/jeux', db.createJeu)
  app.put('/jeux/:id', db.updateJeu)
  app.delete('/jeux/:id', db.deleteJeu)


  app.get('/zones', db.getZones)
  app.get('/zones/:id', db.getZoneById)
  app.post('/zones', db.createZone)
  app.put('/zones/:id', db.updateZone)
  app.delete('/zones/:id', db.deleteZone)

  app.get('/creneaux', db.getCreneaux)
  app.get('/creneaux/:id', db.getCreneauById)
  app.post('/creneaux', db.createCreneau)
  app.put('/creneaux/:id', db.updateCreneau)
  app.delete('/creneaux/:id', db.deleteCreneau)

  app.get('/relations', db.getRelations)
  app.get('/relations/:id', db.getRelationById)
  app.post('/relations', db.createRelation)
  app.delete('/relations/:id',db.deleteRelation)

  app.get('/jeuxnom',db.getJeuxnom)
  app.get('/jeuxtype',db.getJeuxtype)
  app.get('/jeuxzone',db.getJeuxzone)
  app.get('/benevolecreneauzone/:id',db.getBenevolesbycreneauxbyzone)
  app.get('/benevolezonecreneau/:id',db.getBenevolesbyzonebycreneau)
  app.post('/getrelations',db.checkRelation)
  app.post('/deleterelation',db.deleteRelation)

  app.post("/connect", db.connection)




app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })