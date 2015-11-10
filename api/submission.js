var Submission = require('../models/Submission');

var getAllSubmissions = function(req, res) {
	Submission.find(function(err, results) {
		if (err) {
			res.send(err);
		}
		res.json({ submissions: results });
	});
};

var addSubmission = function(req, res) {
	// create new submission
	var submissionData = {
		title: req.body.submission.title
	}

	var submission = new Submission(submissionData);
	
	// then save it
	submission.save(function(err) {
		if (err) {
			res.send(err);
		}
		res.json({ submission: submission });
	});
};

module.exports.getAllSubmissions = getAllSubmissions;
module.exports.addSubmission = addSubmission;