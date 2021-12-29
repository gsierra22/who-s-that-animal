const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/tracker/:id', (req, res) => {
  // console.log('req params', req.params)
  // console.log('req query', req.query)
 //console.log(req.query)
 const queryText = `SELECT "location", dates, pets.id FROM "pets"
 JOIN "track" ON "pets".id=track.pets_id
 WHERE "pets".id=$1`;
 pool.query(queryText, [req.params.id])
 .then (result => {
   console.log('then console')
   res.send(result.rows);
 })
 .catch(err =>{
   console.log('Unable to process tracker request', err)
   res.sendStatus(500)
 })
});

router.get('/profile/:id', (req, res) => {
  console.log('req params here', req.params.id)
  // console.log('req query', req.query)
 //console.log(req.query)
 const queryText = `SELECT track.location, track.dates, pets.name, pets.photo, pets_id FROM pets
 JOIN "track" ON track.pets_id=pets.id
 WHERE track.user_id=$1`;
 pool.query(queryText, [req.params.id])
 .then (result => {
   console.log('then console')
   res.send(result.rows);
 })
 .catch(err =>{
   console.log('Unable to process tracker request', err)
   res.sendStatus(500)
 })
});

// router.get('/profile/:id', (req, res) => {
//   console.log('req params', req.params)
//   console.log('req query', req.query)
//  //console.log(req.query)
//  const profileQuery = `SELECT track.location, track.dates, pets.name, pets.photo, pets_id FROM pets
//  JOIN "user" ON pets.user_id= "user".id
//  JOIN "track" ON track.pets_id=pets.id
//  WHERE "user".id=$1`;
//  pool.query(profileQuery, [req.params.id])
//  .then (result => {
//    console.log('then console')
//    res.send(result.rows);
//  })
//  .catch(err =>{
//    console.log('Unable to process tracker request', err)
//    res.sendStatus(500)
//  })
// });

/**
 * POST route template
 */
 router.post('/', (req, res) => {
  const queryText = `INSERT INTO "track" (pets_id, dates, location, user_id)
  VALUES  ($1, $2, $3, $4)`;
  console.log(req.body)
  const queryValues = [ req.body.pets_id, req.body.dates, req.body.location, req.body.user_id];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

module.exports = router;
