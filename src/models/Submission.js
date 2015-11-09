var mongoose = require('mongoose');

var SubmissionModel;

var SubmissionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	format: {			// video or image
		type: String,
		required: true
	},
	location: {		// url of hosted image/video
		type: String,
		required: true,
		unique: true
	},
	owner: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'Account'
	},
	createdDate: {
		type: Date,
		default: Date.now
	}
});

SubmissionSchema.statics.findByOwner = function(ownerId, callback) {
	var search = {
		owner: mongoose.Types.ObjectId(ownerId);
	};

	return SubmissionModel.find(search).exec(callback);
};

SubmissionModel = mongoose.model('Submission', SubmissionSchema);

module.exports.SubmissionModel = SubmissionModel;
module.exports.SubmissionSchema = SubmissionSchema;