var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('cars');

const getParamValues = (queryObject, paramKey) => {
  if(queryObject[paramKey]) {
    const valueArray = queryObject[paramKey].split(',');
    if (valueArray) {
      return valueArray
        .map(value => {
          switch (paramKey) {
            case 'price':
              return paramKey + ' <= ' + value;
              break;
            case 'year':
              return paramKey + ' = ' + value;
              break;
            default:
              return paramKey + ' = "' + value + '"';
              break;
          }
        })
        .join(' OR ')
      ;
    }
  } else {
    return undefined;
  }
};

const queryReqToSqlWhere = (queryObject) => {
  let whereSql;
  const keys = ['make', 'year', 'price'];
  return keys
    .map(key => getParamValues(queryObject, key))
    .filter(value => value !== undefined)
    .map(whereSqlCase => '(' + whereSqlCase + ')')
    .join(' AND ')
  ;
};

/* GET car listing. */
router.get('/', function (req, res) {

  let sqlQuery = 'SELECT * FROM cars';
  const whereSql = queryReqToSqlWhere(req.query);
  whereSql ? sqlQuery = sqlQuery + ' WHERE ' + whereSql : null;
  
  db.all(sqlQuery, function (err, rows) {
    // console.log('\n-----------------------------------------------------------------------------------------------------------------');
    // console.log(JSON.stringify(rows, null, 2));
    res.send(rows);
  });
  
  // db.all('SELECT make,model,price,year,image FROM cars', function (err, rows) {
  //   // console.log(JSON.stringify(rows));
  //   res.send(rows);
  // });
});

module.exports = router;
