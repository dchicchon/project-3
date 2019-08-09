const db = require("../models")




module.exports = {



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