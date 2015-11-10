var submissions = require('../api/submission');
var path = require('path');

module.exports = function(router) {
	router.route('/submissions')
		.get(function(req, res) {
			submissions.getAllSubmissions(req, res);
		})
		.post(function(req, res) {
			submissions.addSubmission(req, res);
		});
	router.route('*')
		.get(function(req, res) {
			res.sendFile(path.join(__dirname, '../public', 'index.html'));
	});
};