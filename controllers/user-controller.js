// const db = require("../models")
var AWS = require("aws-sdk");
var fs = require("fs")
require("dotenv").config();

// aws.config.update({
// 	region: 'us-west-2',
// 	accessKeyId: 'AKIAICKXFPSR4VYJUMUA',
// 	secretAccessKey: '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'
// })

// const S3_BUCKET_NAME = 'travelerdb'




// require aws-sdk which includes AWS JS library
// const uuid = require("uuid/v4");

// const s3 = new AWS.S3({
// })

// console.log(s3)

// function uploadImage(req, images, cb) {
// 	//use req from the post method, and the image data can be get using the code below

// 	var imageFile = req.files.file.data;
// 	s3.createBucket(function () {
// 		var params = {
// 			Bucket: "travelerdb",
// 			ACL: 'public-read',
// 			Key: `${images}.jpg`,
// 			Body: imageFile
// 		}
// 		s3.upload(params, function (err, data) {
// 			if (err) {
// 				console.log("error with upload");
// 				console.log(err);
// 			} else {
// 				console.log("Upload Success");
// 				console.log("image", data);
// 				cb(data.Location);
// 			}
// 		})
// 	});

// };



module.exports = {

	updatePhoto: (req, res) => {
		console.log('\nINSIDE UPDATE PHOTO')
		const s3 = new AWS.S3({
			accessKeyId: 'AKIAJTEPC4AZARCU7AVA',
			secretAccessKey: '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'
		});
		// const fileName = req.body.fileName;
		// const fileType = req.body.fileType;

		console.log("\nANYBODY HOME?")
		console.log(req.body.image)
		const uploadImg = img => {
			fs.readFileSync(img, (err, data) => {
				if (err) throw err
				const params = {
					Bucket: 'travelerdb',
					Key: img,
					Body: JSON.stringify(data, null, 2),
					ACL: "public-read"
				};

				s3.upload(params, function (s3Err, data) {
					if (s3Err) throw s3Err
					console.log(`File uploaded successfully at: `, data)
				})
			})
		}
		uploadImg(req.body.image)
		// console.log(req)
		// s3.createBucket(function () {
		// 	var params = {
		// 		Bucket: "travelerdb",
		// 		ACL: 'public-read',
		// 		// Key: `${fileName}.${fileType}`,
		// 		// Body: fileName
		// 	}
		// 	console.log("\nPARAMS")
		// 	console.log(params)

		// 	s3.upload(params, function (err, data) {
		// 		if (err) {
		// 			console.log(`Err`, err)
		// 		} else {
		// 			console.log("Success!")
		// 			console.log(data)
		// 		}

		// 	})
		// })



		// const s3Params = {
		// 	Bucket: "travelerdb",
		// 	Key: fileName + '.' + fileType,
		// 	Body: fileName,
		// 	// ContentType: fileType,
		// 	ACL: 'public-read'
		// };

		// s3.getSignedUrl('putObject', s3Params, (err, data) => {
		// 	if (err) {
		// 		console.log(err)
		// 		res.json({ success: false, error: err })
		// 	}
		// 	const returnData = {
		// 		signedRequest: data,
		// 		url: `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`
		// 	};
		// 	res.json({ success: true, data: { returnData } })
		// })

	},
	// This function should allow the user to upload a photo
	// updatePhoto: function (req, res) {
	// 	console.log("\nINSIDE UPDATE PHOTO")
	// 	// console.log(process.env.AWS_ACCESS_KEY_ID)
	// 	// console.log(process.env.AWS_SECRET_ACCESS_KEY)
	// 	// console.log(process.env.S3_BUCKET_NAME)

	// 	var user_id = req.body.name.toLowerCase();
	// 	user_id = user_id.replace(/\s/g, '');
	// 	user_id = user_id + uuid();


	// 	var image = {
	// 		user_id: req.body.user_id,
	// 		image: user_id
	// 	};

	// 	uploadImage(req, image.image, function (location) {
	// 		console.log(location);
	// 		console.log(req);


	// 		db.User.update(
	// 			{
	// 				image: location,
	// 			},
	// 			{
	// 				where: { id: req.body.id }
	// 			})
	// 			.then(function (dbUser) {
	// 				res.json({ imageUrl: location });
	// 			});
	// 	});
	// },

	// This returns user profile information
	getUser: (req, res) => {
		console.log("\nMADE IT TO PROFILE ROUTE AGAIN TO GET USER\n")
		console.log("REQ Params", req.params.id)
		db.User.findOne({ where: { id: req.params.id } })
			.then(dbUser => {
				console.log("\nMADE IT TO PROFILE ROUTE\n")
				console.log("USER PROFILE:", dbUser.dataValues)
				res.json(dbUser)
			})
			.catch(err => res.status(422).json(err));
	},

	// This will allow the user to edit their information. At the moment, you can only edit the bio but later they should be able to edit their profile picture
	editUser: (req, res) => {
		db.User.update({ bio: req.body.bio }, { where: { id: req.body.user_id } })
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	}


}