const express = require('express')
const router = express.Router()
const profile = require('../controllers/profiles')

router.get('profiles/')
router.post('profiles/', profile.postProfile)
router.patch('profiles/:id')
router.delete('profiles/:id')


module.exports = router