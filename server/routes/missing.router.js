const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

//get route for missing pets
router.get("/", (req, res) => {
  const query = `SELECT * FROM pets
    WHERE pets.missing=true;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

//delete pet from account
router.delete("/delete/:id", (req, res) => {
  const deletePets = `DELETE FROM pets WHERE id=$1`;
  values = [req.params.id];
  pool
    .query(deletePets, values)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error DELETE /api/animals", error);
      res.sendStatus(500);
    });
});

module.exports = router;
