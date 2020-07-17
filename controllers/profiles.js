const Profiles = require('../models/profiles')

const profileController = {}

profileController.postProfile = async (req, res)=>{
    try {
        const profile = new Profiles({
            name: req.body.name,
            birthdate:req.body.birthdate,
            origin_city:req.body.origin_city,
            country:req.body.country
        }) 
        await profile.save()
        res.json({
            status:'Dato Guardado',
            profile:profile
        })
    } catch (error) {
        
    }
}

module.exports= profileController