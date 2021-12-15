const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {

  const query = `SELECT * FROM pets ORDER BY "id" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all pets', err);
      res.sendStatus(500)
    })

});

/**
 * POST route template
 */
 router.post('/', (req, res) => {
  const queryString = `INSERT INTO "pets" (catdog, missing, description, location, date, neighborhood, photo, owner_id  ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );`;
  values = [ req.body.catdog, req.body.missing, req.body.description, req.body.location, req.body.date, req.body.neighborhood, req.body.photo, req.body.owner_id ];
  pool.query( queryString, value).then( (results)=>{
    res.sendStatus( 200 );
  }).catch( (err)=>{
    console.log( err );
    res.sendStatus( 500 );
  })
});

router.put('/', (req, res) => {
  const queryString = `UPDATE "widget" SET price=$1 WHERE id=$2;`;
  values = [ req.query.price, req.query.id ];
  pool.query( queryString, value).then( (results)=>{
    res.sendStatus( 200 );
  }).catch( (err)=>{
    console.log( err );
    res.sendStatus( 500 );
  })
});

router.delete('/:id', (req, res) => {
  const queryString = `DELETE FROM pets WHERE id=$1`;
  values = [ req.params.id ];
  pool.query( queryString, value).then( (results)=>{
    res.sendStatus( 200 );
  }).catch( (err)=>{
    console.log( err );
    res.sendStatus( 500 );
  })
});

module.exports = router;
