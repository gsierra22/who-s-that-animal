const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/tracker/:id', (req, res) => {
  console.log('hello tracker', req.params.id)
 //console.log(req.query)
 const queryText = `SELECT "location", dates, pets_id FROM "pets"
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
