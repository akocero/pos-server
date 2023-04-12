const Product = require('../models/product.model.js');
const factory = require('../utils/contollersFactory.js');
const AppError = require('../utils/appError.js');

const index = factory.index(Product, {
	path: 'coverPhoto',
});
const store = factory.store(Product);
const show = factory.show(Product, {
	path: 'coverPhoto',
});
const update = factory.update(Product, {
	path: 'coverPhoto',
});
const destroy = factory.destroy(Product);
const updateQty = async (req, res, next) => {
	const { qty } = req.body;

	const doc = await Product.findByIdAndUpdate(req.params.id, {
		$inc: { quantity: -qty },
	});

	if (!doc) {
		return next(new AppError('No document found with that ID', 404));
	}

	res.status(200).json({
		status: 'success',
		data: doc,
	});
};

module.exports = {
	index,
	store,
	show,
	destroy,
	update,
	updateQty,
};
