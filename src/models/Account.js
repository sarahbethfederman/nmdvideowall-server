var mongoose = require('mongoose');

var AccountModel;

// TODO: Add Salt
var AccountSchema = new mongoose.AccountSchema({
	username: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	}
	password: {
		type: String,
		required: true
	},
	createdDate {
		type: Date, 
		default: Date.now
	}
});

AccountModel = mongoose.model('Account', AccountSchema);

module.exports.AccountModel = AccountModel;
module.exports.AccountSchema = AccountSchema;