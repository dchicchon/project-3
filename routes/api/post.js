const router = require("express").Router()
const postController = require("../../controllers/post-controller")
const db = require("../../models")



// const multer = require('multer');
// const multerS3 = require("multer-s3")
// var AWS = require("aws-sdk");

// // require("dotenv").config();


// var s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// })

// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: process.env.S3_BUCKET_NAME,
//         acl: 'public-read',
//         contentType: multerS3.AUTO_CONTENT_TYPE,
//         metadata: function (req, file, cb) {
//             console.log("\nMETA")
//             console.log(req.headers)
//             console.log(req.body)
//             console.log(file)

//             cb(null, { fieldName: file.fieldname })
//         },
//         key: function (req, file, cb) {
//             console.log("\nKEY")
//             console.log(req.headers)
//             console.log(req.body)
//             console.log(file)
//             cb(null, Date.now().toString())
//         }
//     }),
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     // fileFilter: fileFilter
// });
// router.get("/post", (req, res) => {
//     console.log("HERE WE GET POSTS")
//     console.log(req.body)
//     // postController.getPosts()
// })

// router.post("/post", (req, res) => {
//     console.log("We hit the post route")
//     console.log("REQ BODY:", req.body)
//     postController.addPost(req.body)
//     // .then(console.log("Added Post"))
// })

router.route("/post")
    .get(postController.getPosts)
    .post(postController.addPost)
    // .post(upload.single("imageData"), (req, res, next) => {
    //     console.log("IMAGE ROUTE POST")
    //     // var location = (`https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/`)
    //     console.log(req.file.location)
    //     res.json({
    //         imageURL: req.file.location
    //     })
    //     // res.send(req.file.location)
    // })
    // .put(postController)
    // .delete(postController)

router.route("/post/:id")
    .get(postController.getPostsByUser)



module.exports = router;
