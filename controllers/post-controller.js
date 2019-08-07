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


		var image = {
			name: req.body.name,
			image: name
		};

		uploadImg(req, image.image, (location) => {
			console.log(req);

			db.User.update(
				{
					image: location,
				},
				{
					where: { id: req.body.id }
				})
				.then(dbUser => res.json({ imageUrl: location }));
		});
	},


	addPost: (req, res) => {
		console.log("MADE IT TO POST CONTROLLER")
		console.log(`REQ.BODY:`, req.body)
		db.Post.create({
			user_id: req.body.user_id,
			info: req.body.info,
			title: req.body.title,
			location: req.body.location,
			image: req.body.image,
			tag: req.body.tag,
			lat: req.body.lat,
			lng: req.body.lng
		}
		).then(dbPost => res.json(dbPost));
	},

	getPosts: (req, res) => {
		db.Post.findAll({
			// order: [['time', 'desc']],
			limit: 10
		}
		).then(dbPost => res.json(dbPost));
	},

	getPostSearch: (req, res) => {
		console.log("\nDISCOVERSEARCH\n")
		db.Post.findAll({
			where: {tag: req.params.tag}
		},
			{
				limit: 50
			}
		).then(dbPost => {
			console.log(dbPost);
			return res.json(dbPost)
		})
	},

	getPostsByUser: (req, res) => {
		console.log("\nGET USER POSTS FOR PROFILE PAGE:", req.params.id)
		db.Post.findAll(
			{
				where: { user_id: req.params.id }
			},
			{
				// order: [['time', 'desc']],
				limit: 50
			}
		).then(dbPost => {
			console.log(dbPost);


			return res.json(dbPost)
		});
	}
}