var submissions = require('../api/submission');

module.exports = function(router) {
	router.route('/submissions')
		.post(function(req, res) {
			console.log("body: \n"); 
			console.log(req.body);
			submissions.addSubmission(req, res);
		});
	router.route('*')
		.get(function(req, res) {
			res.sendfile('./public/index.html');
		});
};