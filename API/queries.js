const pg = require('pg')
// const client = new client({
//   user: 'bnbavatj',
//   host: 'postgres://bnbavatj:cRMYImf4Ns6i_H90QHkQMmpeeZf6U7aQ@mouse.db.elephantsql.com/bnbavatj',
//   database: 'api',
//   password: 'cRMYImf4Ns6i_H90QHkQMmpeeZf6U7aQ',
  
// })
var conString = "postgres://bnbavatj:cRMYImf4Ns6i_H90QHkQMmpeeZf6U7aQ@mouse.db.elephantsql.com/bnbavatj" //Can be found in the Details page

const getBenevoles = (request, response) => {
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM benevoles ORDER BY idbenevole ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getJeux = (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM jeux ORDER BY idjeux ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getJeuxnom= (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM jeux JOIN zones on zones.idzone=jeux.zone ORDER BY jeux.nomjeux ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getJeuxtype= (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM jeux JOIN zones on zones.idzone=jeux.zone ORDER BY type ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getJeuxzone= (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM jeux JOIN zones on zones.idzone=jeux.zone ORDER BY zone ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getZones = (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM zones ORDER BY idzone ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getCreneaux = (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM creneaux ORDER BY idcreneau ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getRelations = (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM relations ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  } )}


  const getBenevoleById = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM benevoles WHERE idbenevole = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getJeuById = (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    const id = parseInt(request.params.id)
  
    client.query('SELECT * FROM jeux WHERE idjeux = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}

  const getZoneById = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM zones WHERE idzone = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getCreneauById = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('SELECT * FROM creneaux WHERE idcreneau = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getRelationById = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('SELECT * FROM relations WHERE idCreneau, idBenevole,idZone = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}

  const getBenevolesbycreneauxbyzone= (request, response) => {
    const idzone = parseInt(request.params.id)
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM relations join creneaux on creneaux.idcreneau = relations.idcreneau join benevoles on benevoles.idbenevole=relations.idbenevole  WHERE idZone = $1 ORDER BY relations.idCreneau ASC', [idzone], (error, results) => {
      if (error) {
        throw error
      }
      
      
      response.status(200).json(results.rows)
      client.end()
    })
  })}

  const getBenevolesbyzonebycreneau= (request, response) => {
    const idcreneau = parseInt(request.params.id)
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('SELECT * FROM relations join zones on zones.idzone = relations.idzone join benevoles on benevoles.idbenevole=relations.idbenevole WHERE idCreneau = $1 ORDER BY relations.idZone ASC', [idcreneau], (error, results) => {
      if (error) {
        throw error
      }
      
      
      response.status(200).json(results.rows)
      client.end()
    })
    
  })}


  const createBenevole = (request, response) => {
    const { nombenevole,prenom, email } = request.body
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('INSERT INTO benevoles (nombenevole,prenom, email) VALUES ($1, $2,$3) RETURNING *', [nombenevole,prenom, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`benevole added with ID: ${results.rows[0].id}`)
      client.end()
    })
  })}
  const createJeu = (request, response) => {
    const { nom,type,zone } = request.body
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('INSERT INTO jeux (nomjeux, type,zone) VALUES ($1, $2,$3) RETURNING *', [nom,type,zone], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`jeu added with ID: ${results.rows[0].id}`)
      client.end()
    })
  })}
  const createZone = (request, response) => {
    const { nom } = request.body
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('INSERT INTO zones (nomzone,jeux) VALUES ($1) RETURNING *', [nom], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`zone added with ID: ${results.rows[0].id}`)
      client.end()
    })
  })}
  const createCreneau = (request, response) => {
    const { debut,fin } = request.body
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('INSERT INTO creneaux (debut, fin) VALUES ($1, $2) RETURNING *', [debut,fin], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`creneau added with ID: ${results.rows[0].id}`)
      client.end()
    })
  })}
  const createRelation = (request, response) => {
    const { idCreneau,idBenevole,idZone } = request.body
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('INSERT INTO relations (idCreneau, idBenevole,idZone) VALUES ($1, $2,$3) RETURNING *', [idCreneau,idBenevole,idZone], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`creneau added with ID: ${results.rows[0].id}`)
      client.end()
    })
  })}
  const updateBenevole = (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    const id = parseInt(request.params.id)
    const { nombenevole,prenom, email } = request.body
    console.log(request.params)
    client.query(
      'UPDATE benevoles SET nombenevole = $1, prenom = $2,email=$3 WHERE idbenevole = $4',
      [nombenevole,prenom,email,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Benevole modified with ID: ${id}`)
        client.end()
      }
    )
  })}

  const updateJeu = (request, response) => {
    const id = parseInt(request.params.id)
    const { nomjeux,type,zone } = request.body
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query(
      'UPDATE jeux SET nomjeux = $1, type = $2,zone= $3 WHERE idjeux = $4',
      [nomjeux,type,zone, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Jeu modified with ID: ${id}`)
        client.end()
      }
    )
  })}

  const updateZone = (request, response) => {
    const id = parseInt(request.params.id)
    const { nom } = request.body
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  
    client.query(
      'UPDATE zones SET nomzone = $1 WHERE id = $2',
      [nom, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Zone modified with ID: ${id}`)
        client.end()
      }
    )
  })}

  const updateCreneau = (request, response) => {
    const id = parseInt(request.params.id)
    const { debut,fin } = request.body
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query(
      'UPDATE creneaux SET debut = $1,fin=$2 WHERE id = $3',
      [debut,fin, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Creneau modified with ID: ${id}`)
        client.end()
      }
    )
  })}

  const deleteBenevole = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('DELETE FROM benevoles WHERE idbenevole = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`benevole deleted with ID: ${id}`)
      client.end()
    })
  })}

  const deleteJeu = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('DELETE FROM jeux WHERE idjeux = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`jeu deleted with ID: ${id}`)
      client.end()
    })
  })}

  const deleteZone = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('DELETE FROM zones WHERE idzone = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`zone deleted with ID: ${id}`)
      client.end()
    })
  })}

  const deleteCreneau = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('DELETE FROM creneaux WHERE idcreneau = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`creneau deleted with ID: ${id}`)
      client.end()
    })
  })}
  const deleteRelation = (request, response) => {
    const { idbenevole,idcreneau,idzone } = request.body
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('DELETE FROM relations WHERE idbenevole = $1 AND idcreneau = $2 AND idzone = $3', [idbenevole,idcreneau,idzone], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`relation deleted with ID: ${idbenevole}`)
      client.end()
    })
  })}
  const checkRelation = (request,response)=>{
    const { idCreneau,idBenevole,idZone } = request.body
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM relations  WHERE idBenevole = $1 AND idCreneau = $2 ', [idBenevole,idCreneau], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows)
      if (results.rows.length == 0){
        response.status(200).send(results.rows)
      }
      else{response.status(201).send(results.rows)}
      client.end()
    })

  })}
  module.exports = {
    getBenevoles,
    getBenevoleById,
    createBenevole,
    updateBenevole,
    deleteBenevole,
    getJeux,
    getJeuById,
    createJeu,
    updateJeu,
    deleteJeu,
    getZones,
    getZoneById,
    createZone,
    updateZone,
    deleteZone,
    getCreneaux,
    getCreneauById,
    createCreneau,
    updateCreneau,
    deleteCreneau,
    getRelations,
    getRelationById,
    createRelation,
    getJeuxnom,
    getJeuxtype,
    getJeuxzone,
    getBenevolesbycreneauxbyzone,
    getBenevolesbyzonebycreneau,
    deleteRelation,
    checkRelation
    
  }








