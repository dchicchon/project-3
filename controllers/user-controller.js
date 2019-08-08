const db = require("../models")
var AWS = require("aws-sdk");
var fs = require("fs")

// const db = require("../models")

module.exports = {

	// updatePhoto: (upload.single("imageData"), (req, res, next) => {
	// 	console.log('something')
	// 	console.log(req.file)
	// 	// console.log(req.file.location)
	// 	// var fileURL = req.file.location
	// 	// res.send(fileURL)

	// }),

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