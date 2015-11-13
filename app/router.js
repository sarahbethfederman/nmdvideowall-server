var submissions = require('../api/submission');
var path = require('path');

// express's file upload module
var multer = require('multer');

// storage options
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		// set destination for user uploads
		cb(null, path.join(__dirname, '../public', 'assets/', 'submissions/'));
	},
	filename: function (req, file, cb) {
		// the file ending from the mimetype
		var type = file.mimetype;
		var ending = type.substring(type.indexOf('/') + 1);	
		cb(null, file.fieldname + '-' + Date.now() + '.' + ending);	// automate unique filenaming
	}
});

// Multer options
var opts = { 
	limits: {
		fileSize: 30000000	// 30 MB == 3 mil bytes
	},
	storage: storage
};

var upload = multer(opts);

module.exports = function(router) {
	router.get('/submissions/', function(req, res) {
		submissions.getAllSubmissions(req, res);
	});
	router.post('/submissions/', function(req, res) {
		console.log('posted to submissions');
		// take the file in the form field named submission-file

		// TODO: This isn't getting called idk why
		submissions.addSubmission(req, res);
	});
	router.get('*', function(req, res) {
		// always send the ember SPA, stored in index
		res.sendFile(path.join(__dirname, '../public', 'index.html'));
	});
};