var Submission = require('../models/Submission');
var path = require('path');

var getAllSubmissions = function(req, res) {
	Submission.find(function(err, results) {
		if (err) {
			res.send(err);
		}
		res.json({ submissions: results });
	});
};

var editSubmission = function() {

};

var addSubmission = function(req, res) {
	console.log('adding');	

	var format;
	if (req.file.mimetype.indexOf('image') !== -1) {
		//its an image submission
		format = 'image';
	} else if (req.file.mimetype.indexOf('video') !== -1) {
		// its a video submission
		format = 'video';
	}

	// create new submission
	var submissionData = {
		title: req.body.title,
		author: req.body.author,
		description: req.body.description,
		location: req.file.path,
		format: format
	};

	var submission = new Submission(submissionData);

	
	// then save it
	submission.save(function(err) {
		if (err) {
			res.send(err);
		}
		console.log('saved');
		res.json({ submission: submission });
	});
};

module.exports.getAllSubmissions = getAllSubmissions;
module.exports.addSubmission = addSubmission;
module.exports.addSubmission = editSubmission;