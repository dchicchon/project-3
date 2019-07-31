const db = require("../models")

const AWS = require("aws-sdk");
const uuid = require("uuid/v4");
const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

module.exports = {
    
}