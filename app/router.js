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

// Multer options
var opts = { 
	limits: {
		fileSize: 20000000	// 20 MB == 2 mil bytes
	},
	storage: storage,
	onFileUploadStart: function(file) {	// omly accept jpg/jpeg, png, and mp4
	  if(file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png' && file.mimetype !== 'video/mp4') {
	    return false;
	  }
  }	
};

var upload = multer(opts)

module.exports = function(router) {
	router.route('/submissions')
		.get(function(req, res) {
			submissions.getAllSubmissions(req, res);
		});
	router.route('/submit')
		.post(upload.single('submission-file'), function(req, res) 	// take the file in the form field named submission-file
			//submissions.addSubmission(req, res, errHandler);
		});
	router.route('*')
		.get(function(req, res) {
			res.sendFile(path.join(__dirname, '../public', 'index.html'));
	});
};