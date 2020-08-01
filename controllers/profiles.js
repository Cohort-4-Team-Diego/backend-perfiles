const Profiles = require("../models/profiles")
const profileController = {}

profileController.getProfiles = async (req, res) => {
	try {
		const profiles = await Profiles.find()
		res.json(profiles)
	} catch (error) {
		res.json({
			error: error.message
		})
	}
}

profileController.getProfile = async (req, res) => {
	try {
		const profile = await Profiles.findById(req.params.id)
		res.json(profile)
	} catch (error) {
		res.json({
			error: error.message
		})
	}
}

profileController.updateProfile = async (req, res) => {
	console.log(req.body)
	try {
		const profile = {
			name: req.body.name,
			birthdate: req.body.birthdate,
			origin_city: req.body.origin_city,
			country: req.body.country,
			technical_profile: req.body.technical_profile,
			platzi_profile: req.body.platzi_profile,
			twitter_profile: req.body.twitter_profile,
			linkedin_profile: req.body.linkedin_profile,
			github_profile: req.body.github_profile,
			role: req.body.role,
			superpower: req.body.superpower,
			weakness: req.body.weakness,
			description: req.body.description,
			photo: req.body.photo,
			email: req.body.email,
			facebook: req.body.facebook,
		}
		await Profiles.findByIdAndUpdate(req.params.id, {
			$set: profile
		}, { new: true })
		res.json({
			status: "Dato Actualizado",
			body: profile
		})

	} catch (error) {
		res.json({
			error: error.message
		})
	}
}

profileController.deleteProfile = async (req, res) => {
	try {
		await Profiles.findByIdAndRemove(req.params.id)
		res.json({
			status: "Dato Eliminado"
		})
	} catch (error) {
		res.json({
			error: error.message
		})
	}
}

profileController.postProfile = async (req, res) => {
	console.log(req.body)
	try {
		const profile = new Profiles({
			name: req.body.name,
			birthdate: req.body.birthdate,
			origin_city: req.body.origin_city,
			country: req.body.country,
			technical_profile: req.body.technical_profile,
			platzi_profile: req.body.platzi_profile,
			twitter_profile: req.body.twitter_profile,
			linkedin_profile: req.body.linkedin_profile,
			github_profile: req.body.github_profile,
			role: req.body.role,
			superpower: req.body.superpower,
			weakness: req.body.weakness,
			description: req.body.description,
			photo: req.body.photo,
			email: req.body.email,
			facebook: req.body.facebook,
		})
		console.log(req.body)
		await profile.save()
		res.json({
			status: "Dato Guardado",
			//profile:profile
		})
	} catch (e) {
		res.json({
			message: e.message,
		})
	}


}

module.exports = profileController
