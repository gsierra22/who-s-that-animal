const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/message', (req, res) => {
  console.log('hello')
 //console.log(req.query)
 const queryText = ` SELECT message, "name", "description", neighborhood, catdog FROM "pets"
 JOIN "message" ON "pets".id=message.pet_id
 WHERE "pets".id=1$`;
 pool.query(queryText)
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
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
