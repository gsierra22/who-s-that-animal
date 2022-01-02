const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/mypets/:id', (req, res) => {
   //console.log('hello')
  //console.log(req.query)
  const queryText = ` SELECT * FROM "user"
  JOIN "pets" ON "user".id=pets.user_id
  WHERE "user".id=$1`;
  pool.query(queryText, [req.params.id])
  .then (result => {
    res.send(result.rows);
  })
  .catch(err =>{
    console.log('Unable to process request')
    res.sendStatus(500)
  })
});

router.get('/all', (req, res) => {
//console.log('arrive in router.get')
  const query = `SELECT * FROM pets`;
  pool.query(query)
    .then( result => 
      {//console.log(result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});


router.post('/', (req, res) => {
  //console.log(req.body);
  // RETURNING "id" will give us back the id of the created pet
  const insertPetQuery = `INSERT INTO "pets" (name, catdog, missing, description, neighborhood, photo, missing_message, user_id) 
  VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING "id";
  `

  // FIRST QUERY MAKES Pet
  pool.query (insertPetQuery, [req.body.name, req.body.catdog, req.body.missing, req.body.description, req.body.neighborhood, req.body.missing_message, req.body.photo, req.body.user_id])
  .then(result => {
    //console.log("New Pet Id:", result.rows[0].id)
    const createdPetId = result.rows[0].id

    // Now handle the track reference
     const insertTrackQuery = `
      INSERT INTO "track" (pets_id, dates, location, user_id)
      VALUES  ($1, $2, $3, $4);
      `
      // SECOND QUERY ADDS TRACKING INFORMATION FOR THAT NEW PET
      pool.query(insertTrackQuery, [createdPetId, req.body.dates, req.body.location, req.body.user_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})



router.put('/missing/:id', (req, res) => {
  const queryString = `UPDATE "pets" SET missing=$1 WHERE id=${req.params.id};`;
  console.log(req.query)
  values = [ req.query.missing ];
  pool.query( queryString, values).then( (results)=>{
    res.sendStatus( 200 );
    console.log(req.params.id)
  }).catch( (err)=>{
    console.log( err );
    res.sendStatus( 500 ); 
  })
});


router.delete('/delete/:id', (req, res) => {
  const deletePets = `DELETE FROM pets WHERE id=$1`;
  values= [req.params.id]
  pool.query(deletePets, values).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error DELETE /api/animals', error);
      res.sendStatus(500);
  })
});

module.exports = router;
