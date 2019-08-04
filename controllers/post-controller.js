const db = require("../models")

// require aws-sdk which includes AWS JS library
const AWS = require("aws-sdk");
var uuid = require("uuid/v4");

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

uploadImg = (req) => {
	let imageFile = req.files.file.data;
	s3.createBucket(() => {
		let params = {
			Bucket: process.env.S3_BUCKET_NAME,
			ACL: 'public-read',
			Key: `${image}.jpg`,
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
	updatePhoto: (req, res) => {

		var name = req.body.name.toLowerCase();
		name = name.replace(/\s/g, '');
		name = name + uuid();


		var profileImg = {
			name: req.body.name,
			image: name
		};

		uploadImg(req, profileImg.image, (location) => {
			console.log(req);

			db.User.update(
				{
					profileImg: location,
				},
				{
					where: { id: req.body.id }
				})
				.then(dbUser => res.json({ imageUrl: location }));
		});
	},


	addPost: (req, res) => {
		console.log("MADE IT TO POST CONTROLLER")

		db.Post.create({
			info: req.body.info,
			// image: req.body.image,
			tag: req.body.tag
		}
		).then(dbPost => res.json(dbPost));
	},

	getPosts: (req, res) => {
		db.Post.findAll({
			order: [['time', 'desc']],
			limit: 10
		}
		).then(dbPost => res.json(dbPost));
	},

	getPostsByUser: (req, res) => {
		db.Post.findAll(
			{
				where: { id: req.params.id }
			},
			{
				order: [['time', 'desc']],
				limit: 50
			}
		).then(dbPost => res.json(dbPost));
	}
}