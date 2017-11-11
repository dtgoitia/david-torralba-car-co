var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('cars');

var data = [
  {
    make: 'ALFA ROMEO',
    model: '4C',
    price: 20000,
    mileage: 15000,
    year: 2015,
    image: 'http://blog.caranddriver.com/wp-content/uploads/2014/06/2015-Alfa-Romeo-4C-Launch-Edition-PLACEMENT-626x382.jpg'
  },
  {
    make: 'AUDI',
    model: 'A4',
    price: 29000,
    mileage: 15000,
    year: 2015,
    image: 'http://media.caranddriver.com/images/13q4/543506/2015-audi-a4-rendered-detailed-news-car-and-driver-photo-560015-s-450x274.jpg'
  },
  {
    make: 'AUDI',
    model: 'TT QUATTRO',
    price: 45000,
    mileage: 15000,
    year: 2015,
    image: 'http://www.dpccars.com/gallery/var/resizes/Silver-2015-Audi-TT-in-snow-photoshoot/Silver%202015%20Audi%20TT%20in%20snow%20photoshoot%20(2).jpg'
  },
  {
    make: 'BENTLEY',
    model: 'CONTINENTAL',
    price: 49000,
    mileage: 15000,
    year: 2015,
    image: 'http://ag-spots-2015.o.auroraobjects.eu/2015/01/26/bentley-continental-gt-speed-2015-c663026012015045948_1.jpg'
  },
  {
    make: 'BMW',
    model: '328D',
    price: 35000,
    mileage: 15000,
    year: 2015,
    image: 'https://acarisnotarefrigerator.files.wordpress.com/2013/11/2014-bmw-328d-wagon-front.jpg'
  },
  {
    make: 'FORD',
    model: 'C-MAX',
    price: 15000,
    mileage: 15000,
    year: 2015,
    image: 'http://images.car.bauercdn.com/upload/33216/images/1752x1168/grand-c-max-01.jpg?mode=max&quality=90&scale=down'
  },
  {
    make: 'HONDA',
    model: 'CIVIC',
    price: 12000,
    mileage: 15000,
    year: 2015,
    image: 'http://contentservice.mc.reyrey.net/image_v1.0.0/61806229'
  },
  {
    make: 'JEEP',
    model: 'CHEROKEE',
    price: 10000,
    mileage: 15000,
    year: 2015,
    image: 'http://blogs-images.forbes.com/kbrauer/files/2015/05/2015-Jeep-Cherokee-Front.jpg?width=960'
  },
  { make: 'KIA', model: 'SOUL', price: 11000, mileage: 15000, year: 2015, image: 'https://i.ytimg.com/vi/O1XUiUSDU6k/hqdefault.jpg' },
  {
    make: 'LAND ROVER',
    model: 'RANGE ROVER',
    price: 50000,
    mileage: 75000,
    year: 2015,
    image: 'http://tcledev.com/wp-content/uploads/2015/07/2015-Land-Rover-Range-Rover-Great-CarPhoto.jpg'
  },
  {
    make: 'MASERATI',
    model: 'GRANTURISMO',
    price: 10000,
    mileage: 15300,
    year: 2015,
    image: 'http://spidercars.net/wp-content/uploads/images/2015-Maserati-GranTurismo_1040.jpg'
  },
  {
    make: 'MERCEDES-BENZ',
    model: 'SLS AMG',
    price: 10000,
    mileage: 15000,
    year: 2015,
    image: 'http://www.cstatic-images.com/stock/900x600/1425674997269.jpg'
  },
  {
    make: 'PORSCHE',
    model: '911',
    price: 20000,
    mileage: 200000,
    year: 2015,
    image: 'http://media.caranddriver.com/images/14q4/638371/2015-porsche-911-gts-photos-and-info-news-car-and-driver-photo-640321-s-450x274.jpg'
  },
  {
    make: 'RENAULT',
    model: 'CLIO',
    price: 10000,
    mileage: 15000,
    year: 2015,
    image: 'http://www.kearys.ie/imglib/KearysResponsive2014/why-buy-the-2015-renault-clio-exterior.jpg'
  },
  {
    make: 'SMART',
    model: 'FORTWO',
    price: 25000,
    mileage: 29000, year: 2015,
    image: 'http://images.car.bauercdn.com/upload/32819/images/001_2fortwo.jpg'
  },
  {
    make: 'TESLA',
    model: 'S',
    price: 40000,
    mileage: 40001, year: 2015,
    image: 'http://www.thetechherald.com/wp-content/uploads/2015/12/tesla-model-s.jpg'
  },
  {
    make: 'TOYOTA',
    model: 'PRIUS',
    price: 15000,
    mileage: 50000, year: 2015,
    image: 'http://images.hgmsites.net/hug/2015-toyota-prius-5dr-hb-three-natl-angular-front-exterior-view_100485217_h.jpg'
  },
  {
    make: 'TOYOTA',
    model: 'RAV4',
    price: 22000,
    mileage: 11000, year: 2015,
    image: 'http://www.iihs.org/frontend/iihs/ratings/images/api-model-year-image.ashx?id=1863&width=730'
  },
  {
    make: 'VOLKSWAGEN',
    model: 'GOLF',
    price: 23000,
    mileage: 17000, year: 2016,
    image: 'http://st.motortrend.com/uploads/sites/10/2015/09/2015-volkswagen-golf-gti-front-angle.jpg'
  },
  {
    make: 'VOLVO',
    model: 'XC90',
    price: 49000,
    mileage: 39000, year: 2016,
    image: 'http://s3.caradvice.com.au/thumb/960/500/wp-content/uploads/2015/09/volvo-xc90-d5-momentum-2015-58.jpg'
  }
];

db.serialize(function () {
  db.run('begin transaction');
  db.run('drop table if exists cars');
  db.run('CREATE TABLE cars (make TEXT, model TEXT, price INTEGER, year INTEGER, image TEXT)');

  var stmt = db.prepare('INSERT INTO cars VALUES (?,?,?,?,?)');
  for (var i = 0; i < data.length; i++) {
    var car = data[i];
    stmt.run(car.make, car.model, car.price, car.year, car.image);
  }
  stmt.finalize();
  db.run('commit');

  // db.each('SELECT make,model,price,year,image FROM cars', function (err, row) {
  //     console.log(row.make + ': ' + row.model + ': ' + row.price + ': ' + row.year + ': ' + row.image);
  // });
});

db.close();
module.exports = db;
