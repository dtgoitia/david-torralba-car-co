var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('cars');

/* GET car listing. */
router.get('/', function (req, res) {
  db.all('SELECT make,model,price,year,image FROM cars', function (err, rows) {
    // console.log(rows);
    res.send(rows);
  });
});

module.exports = router;
