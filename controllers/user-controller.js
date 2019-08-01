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
	updatePhoto: function (req, res) {

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
					where: { id: req.body.UserId }
				})
				.then(dbUser => res.json({ imageUrl: location }));
		});
	},


	getUser: function (req, res) {
		db.User.findOne({ where: { id: req.params.id } })
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	addUser: function (req, res) {
		db.User.create(req.body, { email: req.body.email })
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	editUser: function (req, res) {
		db.User.update({ email: req.body.email, password: req.body.password}, { where: { id: req.params.id }})
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	}


}