var submissions = require('../api/submission');
var path = require('path');

// express's file upload module
var multer = require('multer');

// storage options
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, path.join(__dirname, '../public', 'assets/', 'submissions/'));
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());	// automate filenaming
	}
});

// Multer options
var opts = { 
	limits: {
		fileSize: 30000000	// 30 MB == 3 mil bytes
	},
	storage: storage,
	onFileUploadStart: function(file) {	// omly accept jpg/jpeg, png, and mp4
	  if(file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png' && file.mimetype !== 'video/mp4') {
	  	console.log('wrong file type');
	    //return false;
	  }
  }	
};

var upload = multer(opts);

module.exports = function(router) {
	router.get('/submissions', function(req, res) {
		submissions.getAllSubmissions(req, res);
	});
	router.post('/submissions/create', upload.single('submission-file'), function(req, res) {
		// take the file in the form field named submission-file
		submissions.addSubmission(req, res);
	});
	router.get('*', function(req, res) {
		// always send the ember SPA, stored in index
		res.sendFile(path.join(__dirname, '../public', 'index.html'));
	});
};