// const db = require("../models")
var AWS = require("aws-sdk");
var fs = require("fs")

require("dotenv").config();

uploadImg = (req, image) => {
	// var imageFile = req.files.file.data
	var imageFile = req
	s3.createBucket(function () {
		var params = {
			Bucket: process.env.S3_BUCKET_NAME,
			ACL: "public-read",
			Key: `${image}.jpg`,
			Body: imageFile
		}

		s3.upload(params, function (err, data) {
			if (err) {
				console.log("error with upload");
				console.log(err)
			} else {
				console.log("UPLOAD SUCCESS")
				console.log("IMage", data)
				cb(data.Location)
			}
		})
	})
}

module.exports = {

	updatePhoto: (req, res) => {
		console.log('\nINSIDE UPDATE PHOTO')


		var profilePhoto = {
			name: "IMage work",
			image: 'the name'
		}

		uploadImg("kalen-emsley-Bkci_8qcdvQ-unsplash", profilePhoto.image, function (location) {
			console.log(location)
			console.log("!!!!!!!!!!!!!!")
		})

	},

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