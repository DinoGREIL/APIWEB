const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'ds6gyps9',
  port: 5432,
})
const getBenevoles = (request, response) => {
    pool.query('SELECT * FROM benevoles ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getJeux = (request, response) => {
    pool.query('SELECT * FROM jeux ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getJeuxnom= (request, response) => {
    pool.query('SELECT * FROM jeux ORDER BY nom ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getJeuxtype= (request, response) => {
    pool.query('SELECT * FROM jeux ORDER BY type ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getJeuxzone= (request, response) => {
    
    pool.query('SELECT * FROM jeux ORDER BY zone ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getZones = (request, response) => {
    pool.query('SELECT * FROM zones ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getCreneaux = (request, response) => {
    pool.query('SELECT * FROM creneaux ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getRelations = (request, response) => {
    pool.query('SELECT * FROM relations ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  } 


  const getBenevoleById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM benevoles WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getJeuById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM jeux WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getZoneById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM zones WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getCreneauById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM creneaux WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getRelationById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM relations WHERE idCreneau, idBenevole,idZone = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getBenevolesbycreneauxbyzone= (request, response) => {
    const idzone = parseInt(request.params.id)
  
    pool.query('SELECT * FROM relations WHERE idZone = $1', [idzone], (error, results) => {
      if (error) {
        throw error
      }
      res=[]
      for (let i=0;i<results.rows.length;i++){
          var benevole=results.rows[i].idBenevole
          var creneau=results.rows[i].idCreneau
          var benevolenom;
          var creneaunom;
          pool.query('SELECT * FROM benevoles WHERE id = $1', [benevole], (error, resultsbenevole) => {
        if (error) {
          throw error
        }
        benevolenom=resultsbenevole.rows
      })
      pool.query('SELECT * FROM creneaux WHERE id = $1', [creneau], (error, resultscreneau) => {
        if (error) {
          throw error
        }
        creneaunom=resultscreneau.rows
      })
      res.push([benevolenom,creneaunom])
      }
      
      response.status(200).json(res)
    })
  }

  const getBenevolesbyzonebycreneau= (request, response) => {
    const idcreneau = parseInt(request.params.id)
  
    pool.query('SELECT * FROM relations WHERE idCreneau = $1', [idcreneau], (error, results) => {
      if (error) {
        throw error
      }
      res=[]
      for (let i=0;i<results.rows.length;i++){
          var benevole=results.rows[i].idBenevole
          var zone=results.rows[i].idZone
          var benevolenom;
          var zonenom;
          pool.query('SELECT * FROM benevoles WHERE id = $1', [benevole], (error, resultsbenevole) => {
        if (error) {
          throw error
        }
        benevolenom=resultsbenevole.rows
      })
      pool.query('SELECT * FROM zones WHERE id = $1', [zone], (error, resultszone) => {
        if (error) {
          throw error
        }
        zonenom=resultszone.rows
      })
      res.push([benevolenom,zonenom])
      }
      
      response.status(200).json(res)
    })
  }


  const createBenevole = (request, response) => {
    const { nom,prenom, email } = request.body
  
    pool.query('INSERT INTO benevoles (nom,prenom, email) VALUES ($1, $2,$3) RETURNING *', [nom,prenom, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`benevole added with ID: ${results.rows[0].id}`)
    })
  }
  const createJeu = (request, response) => {
    const { nom,type,zone } = request.body
  
    pool.query('INSERT INTO jeux (nom, type,zone) VALUES ($1, $2,$3) RETURNING *', [nom,type,zone], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`jeu added with ID: ${results.rows[0].id}`)
    })
  }
  const createZone = (request, response) => {
    const { nom } = request.body
  
    pool.query('INSERT INTO zones (nom,jeux) VALUES ($1) RETURNING *', [nom], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`zone added with ID: ${results.rows[0].id}`)
    })
  }
  const createCreneau = (request, response) => {
    const { debut,fin } = request.body
  
    pool.query('INSERT INTO creneaux (debut, fin) VALUES ($1, $2) RETURNING *', [debut,fin], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`creneau added with ID: ${results.rows[0].id}`)
    })
  }
  const createRelation = (request, response) => {
    const { idCreneau,idBenevole,idZone } = request.body
  
    pool.query('INSERT INTO relations (idCreneau, idBenevole,idZone) VALUES ($1, $2,$3) RETURNING *', [idCreneau,idBenevole,idZone], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`creneau added with ID: ${results.rows[0].id}`)
    })
  }
  const updateBenevole = (request, response) => {
    const id = parseInt(request.params.id)
    const { nom,prenom, email } = request.body
  
    pool.query(
      'UPDATE benevoles SET nom = $1, prenom = $2,email=$3 WHERE id = $4',
      [nom,prenom, email , id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Benevole modified with ID: ${id}`)
      }
    )
  }

  const updateJeu = (request, response) => {
    const id = parseInt(request.params.id)
    const { nom,type,zone } = request.body
  
    pool.query(
      'UPDATE jeux SET nom = $1, type = $2,zone= $3 WHERE id = $4',
      [nom,type,zone, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Jeu modified with ID: ${id}`)
      }
    )
  }

  const updateZone = (request, response) => {
    const id = parseInt(request.params.id)
    const { nom } = request.body
  
    pool.query(
      'UPDATE zones SET nom = $1 WHERE id = $2',
      [nom, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Zone modified with ID: ${id}`)
      }
    )
  }

  const updateCreneau = (request, response) => {
    const id = parseInt(request.params.id)
    const { debut,fin } = request.body
  
    pool.query(
      'UPDATE creneaux SET nom = $1,fin=$2 WHERE id = $3',
      [debut,fin, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Creneau modified with ID: ${id}`)
      }
    )
  }

  const deleteBenevole = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM benevoles WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`benevole deleted with ID: ${id}`)
    })
  }

  const deleteJeu = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM jeux WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`jeu deleted with ID: ${id}`)
    })
  }

  const deleteZone = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM zones WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`zone deleted with ID: ${id}`)
    })
  }

  const deleteCreneau = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM creneaux WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`creneau deleted with ID: ${id}`)
    })
  }
  const deleteRelation = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM creneaux WHERE idbenevole = $1', [id], (error, results) => {
      if (error) {
        response.status(200).send(`no relation with ID: ${id}`)
      }
      response.status(200).send(`relation deleted with ID: ${id}`)
    })
  }

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
    deleteRelation
    
  }








