const db = require('../config/db.config.js');
const product = db.products;

// Post a product
exports.create = (req, res) => {	
	// Save to MySQL database
	let product = req.body;
	product.create(product).then(result => {		
		// Send created product to client
		res.json(result);
	});
};
 
// Fetch all products
exports.findAll = (req, res) => {
	product.findAll().then(products => {
	  // Send all products to Client
	  res.json(products);
	});
};

// Find a product by Id
exports.findById = (req, res) => {	
	product.findById(req.params.productId).then(product => {
		res.json(product);
	})
};
 
