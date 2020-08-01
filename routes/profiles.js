const express = require('express')
const router = express.Router()
const profile = require('../controllers/profiles')

router.get('/', profile.getProfiles)
router.get('/:id', profile.getProfile)
router.post('/', profile.postProfile)
router.patch('/:id', profile.updateProfile)
router.delete('/:id', profile.deleteProfile)


module.exports = router