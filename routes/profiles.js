const express = require('express')
const router = express.Router()
const profile = require('../controllers/profiles')

// router.get('/profiles', (req, res) => {
//    res.send('funcionado')
// })


// router.get('/', (req, res) => {
//   res.send('funcionadno')
// })
router.post('/', profile.postProfile)
// router.patch('/:id')
// router.delete('/:id')


module.exports = router