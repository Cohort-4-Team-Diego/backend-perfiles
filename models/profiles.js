const mongoose = require("mongoose")

const { Schema } = mongoose

const Profile = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		birthdate: {
			type: Date,
			required: true
		},
		country: {
			type: String,
			required: true
		},
		origin_city: {
			type: String,
			required: true
		},
		technical_profile: {
			type: String,
			required: true
		},
		platzi_profile: {
			type: String,
			required: true
		},
		twitter_profile: {
			type: String,
			required: true
		},
		linkedin_profile: {
			type: String,
			required: true
		},
		github_profile: {
			type: String,
			required: true
		},
		role: {
			type: String,
			required: true
		},
		superpower: {
			type: String,
			required: true
		},
		weakness: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		photo: {
			type: String,
			required: false
		},
		email: {
			type: String,
			required: true
		},
		facebook: {
			type: String,
			required: true
		},
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model("Profile", Profile)
