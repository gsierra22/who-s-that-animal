const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET routes
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
 const queryText = `SELECT * FROM pets
 JOIN "track" ON track.pets_id=pets.id
 WHERE track.user_id=$1`;
 pool.query(queryText, [req.params.id])
 .then (result => {
   res.send(result.rows);
 })
 .catch(err =>{
   console.log('Unable to process profile request', err)
   res.sendStatus(500)
 })
});

router.get('/trackmodal/:id', (req, res) => {
  console.log('req params here', req.params.id)
  // console.log('req query', req.query)
 //console.log(req.query)
 const queryText = ` SELECT * FROM track
 JOIN "pets" ON track.pets_id=pets.id
 WHERE track.pets_id=$1`;
 pool.query(queryText, [req.params.id])
 .then (result => {
   res.send(result.rows);
 })
 .catch(err =>{
   console.log('Unable to process trackmodal request', err)
   res.sendStatus(500)
 })
});

/**
 * POST routes
 */
 router.post('/', (req, res) => {
  const queryText = `INSERT INTO "track" (pets_id, dates, location, user_id)
  VALUES  ($1, $2, $3, $4)`;
  console.log(req.body)
  const queryValues = [ req.body.pets_id, req.body.dates, req.body.location, req.body.user_id];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT track post query', err);
      res.sendStatus(500);
    });
});

/**
 * DELETE route
 */
router.delete('/delete/:id', (req, res) => {
  console.log('in delete', req.params, req.query)
  const deletePets = `DELETE FROM track WHERE user_id=$1 AND pets_id=$2`;
  const values=[req.query.user_id, req.params.id];
  pool.query(deletePets, values).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error DELETE /track/delete', error);
      res.sendStatus(500);
  })
});

module.exports = router;
