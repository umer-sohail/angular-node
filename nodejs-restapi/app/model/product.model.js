module.exports = (sequelize, Sequelize) => {
	const product = sequelize.define('product', {
	  name: {
		type: Sequelize.STRING
	  },
	  picture: {
		type: Sequelize.STRING
	  },
	  price: {
		  type: Sequelize.INTEGER
      },
      detail: {
		type: Sequelize.STRING
	  },
	});
	
	return product;
}