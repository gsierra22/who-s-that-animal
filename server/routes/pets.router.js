const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/:id', (req, res) => {
   console.log('hello')
  console.log(req.query)
  const queryText = ` SELECT "catdog", "missing", "description", "location", "date", "neighborhood", "photo" FROM "user"
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

/**
 * POST route template
 */
//  router.post('/', (req, res) => {
//   const queryString = `INSERT INTO "pets" (catdog, missing, description, location, date, neighborhood, photo, owner_id  ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );`;
//   values = [ req.body.catdog, req.body.missing, req.body.description, req.body.location, req.body.date, req.body.neighborhood, req.body.photo, req.body.owner_id ];
//   pool.query( queryString, value).then( (results)=>{
//     res.sendStatus( 200 );
//   }).catch( (err)=>{
//     console.log( err );
//     res.sendStatus( 500 );
//   })
// });

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertPetQuery = `INSERT INTO "pets" (catdog, missing, description, location, date, neighborhood, photo, user_id  ) 
  VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );
  `

  // FIRST QUERY MAKES MOVIE
  pool.query(insertPetQuery, [req.body.catdog, req.body.missing, req.body.description,req.body.location,req.body.date, req.body.neighborhood, req.body.photo, req.body.user_id])
  .then(result => {
    
    // const createdMovieId = result.rows[0].id

    // // Now handle the genre reference
    // const insertMovieGenreQuery = `
    //   INSERT INTO "movies_genres" ("movie_id", "genre_id")
    //   VALUES  ($1, $2);
    //   `
    //   // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
    //   pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
    //     //Now that both are done, send back success!
    //     res.sendStatus(201);
    //   }).catch(err => {
    //     // catch for second query
    //     console.log(err);
    //     res.sendStatus(500)
    //   })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

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
