var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});

require('./app/route/products.routes.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})

function initial(){

  let products = [
    {
      id: 1,
      name: "Joe",
      picture: "Thomas",
      price: 36,
      detail:"detail here",
    },
    {
      id: 2,
      name: "Joe",
      picture: "Thomas",
      price: 36,
      detail:"detail here",
    },
    {
      id: 3,
      name: "Joe",
      picture: "Thomas",
      price: 36,
      detail:"detail here",
    },
    {
      id: 4,
      name: "Joe",
      picture: "Thomas",
      price: 36,
      detail:"detail here",
    },
    {
      id: 5,
      name: "Joe",
      picture: "Thomas",
      price: 36,
      detail:"detail here",
    },
    {
      id: 6,
      name: "Joe",
      picture: "Thomas",
      price: 36,
      detail:"detail here",
    },
    {
      id: 7,
      name: "Joe",
      picture: "Thomas",
      price: 36,
      detail:"detail here",
    }
  ]

  // Init data -> save to MySQL
  const product = db.products;
  for (let i = 0; i < products.length; i++) { 
    product.create(products[i]);  
  }
}