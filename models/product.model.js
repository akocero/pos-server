const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
	{
		// General info
		name: {
			type: String,
			required: [true, 'Name is required'],
			unique: [true, 'Name already exist'],
			trim: true,
			lowercase: true,
		},
		description: {
			type: String,
		},
		isPublished: {
			type: Number,
			default: 0,
		},
		is_deleted: {
			type: Number,
			default: 0,
		},

		// Pricing
		cost: {
			type: Number,
			required: [true, 'Unit Cost is required'],
		},
		price: {
			type: Number,
		},
		salePrice: {
			type: Number,
		},

		// Inventory
		stock: {
			type: Number,
			default: 0,
		},
		lowStock: {
			type: Number,
			default: 0,
		},
		soldCount: {
			type: Number,
			default: 0,
		},
		sku: {
			type: String,
		},
		barcode: {
			type: String,
		},

		coverPhoto: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Image',
			},
		],
		// Categorization
		tags: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Tag',
			},
		],
		collections: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Collection',
			},
		],
		categories: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Category',
			},
		],
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Product', productSchema);
