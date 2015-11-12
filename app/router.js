var submissions = require('../api/submission');
var path = require('path');

// express's file upload module
var multer = require('multer');

// storage options
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, path.join(__dirname, '../public', 'assets/'));
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	}
});

// limit to 20MB files
var opts = { 
	limits: {
		fileSize: 20000000		// 20 MB == 2 mil bytes
	},
	storage: storage 
};

var upload = multer(opts)

module.exports = function(router) {
	router.route('/submissions')
		.get(function(req, res) {
			submissions.getAllSubmissions(req, res);
		});
	router.route('/submit')
		.post(upload.single('submissionFile'), function(req, res) {
			upload(req, res, function(err) {
				var file = 
			});
			//submissions.addSubmission(req, res, errHandler);
		});
	router.route('*')
		.get(function(req, res) {
			res.sendFile(path.join(__dirname, '../public', 'index.html'));
	});
};