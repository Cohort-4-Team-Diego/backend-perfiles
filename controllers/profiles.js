const Profiles = require('../models/profiles')
const profileController = {}

profileController.postProfile = async (req, res)=>{
    console.log(req.body)
    try {
        const profile = new Profiles({
            name: req.body.name,
            birthdate:req.body.birthdate,
            origin_city:req.body.origin_city,
            country:req.body.country
        })
        console.log(req.body)
        await profile.save()
        res.json({
            status:'Dato Guardado',
            //profile:profile
        })
    } catch (e) {
        res.json({
            message: e.message
        })
    }
}

module.exports = profileController