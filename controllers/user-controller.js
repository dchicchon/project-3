const db = require("../models")

// require aws-sdk which includes AWS JS library
const AWS = require("aws-sdk");
const uuid = require("uuid/v4");

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

function uploadImage(req, image, cb) {
	//use req from the post method, and the image data can be get using the code below

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

};



module.exports = {
	updatePhoto: function (req, res) {
	
		console.log(process.env.AWS_ACCESS_KEY_ID)
		console.log(process.env.AWS_SECRET_ACCESS_KEY)
		console.log(process.env.S3_BUCKET_NAME)

		var name = req.body.name.toLowerCase();
		name = name.replace(/\s/g, '');
		name = name + uuid();


		var profilePhoto = {
			name: req.body.name,
			image: name
		};

		uploadImage(req, profilePhoto.image, function (location) {
			console.log(location);
			console.log(req);


			db.User.update(
				{
					profilePhoto: location,
				},
				{
					where: { id: req.body.UserId }
				})
				.then(function (dbUser) {
					res.json({ imageUrl: location });
				});
		});
	},


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

	// addUser: (req, res) => {
	// 	console.log("\nMADE IT TO PROFILE ROUTE AGAIN TO GET USER\n")
	// 	console.log("REQ BODY", req.body)
	// 	db.User.findOne({ where: { id: req.body.id } })
	// 		.then(dbUser => {
	// 			console.log("\nMADE IT TO PROFILE ROUTE\n")
	// 			console.log("USER PROFILE:", dbUser)
	// 			res.json(dbUser)
	// 		})
	// 		.catch(err => res.status(422).json(err));
	// 	// 	db.User.create({
	// 	// 	 email: req.body.email,
	// 	// 	 password: req.body.password,
	// 	// 	 profileImg: req.body.profileImg,
	// 	// 	 bio: req.body.bio
	// 	//    }).then(dbUser => res.json(dbUser));
	// },

	editUser: (req, res) => {
		// console.log("\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\n")
		db.User.update({ bio: req.body.bio }, { where: { id: req.body.user_id } })
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	}


}