const db = require("../models")

// require aws-sdk which includes AWS JS library
const AWS = require("aws-sdk");
const uuid = require("uuid/v4");
const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

function uploadImg(req, image, cb){
    var imageFile = req.files.file.data;
    s3.createBucket(function () {
		var params = {
			Bucket: process.env.S3_BUCKET_NAME,
			ACL: 'public-read',
			Key: `${image}.jpg`,
			Body: imageFile
        }
        s3.upload(params, function (err, data) {
			if (err) {
				console.log("error with upload");
				console.log(err);
			} else {
				console.log("Upload Success");
				console.log("image", data);
				cb(data.Location);
			}
		})
	});
}



module.exports = {
    
}