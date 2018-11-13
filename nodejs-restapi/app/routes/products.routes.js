module.exports = function(app) {

    var products = require('../controllers/product.controller.js');

    // Create a new Product
    app.post('/api/products', products.create);

    // Retrieve all Products
    app.get('/api/products', products.findAll);

    // Retrieve a single Product by Id
    app.get('/api/products/:id', products.findOne);

   
}