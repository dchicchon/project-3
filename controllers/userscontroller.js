const db = require("../models")

// require aws-sdk which includes AWS JS library
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

uploadImg = (req) => {
    let imageFile = req.files.file.data;
    s3.createBucket(() => {
        let params = {
            Bucket: process.env.S3_BUCKET,
            Key: `${req.body.photo}.jpg`,
            Body: imageFile
        };
        s3.upload(params, (err, data) => {
			if (err) {
				console.log("error with upload");
				console.log(err);
			} else {
				console.log("Upload Success");
				console.log("image", data);
			}
		})
	});
}



module.exports = {
    create: (req, res) => {
        if(req.isAuthenticated()){
          if(req.body.photo) uploadImg(req)
          db.User
          .create(req.body, {userUUID:req.session.passport.user})
            .then(dbuser => {
              res.json(dbuser);
            })
            .catch(err => res.status(422).json(err));
        }
        res.status(401).json(err);  
      }
}