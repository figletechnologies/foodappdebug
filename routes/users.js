const express = require('express')
const router = express.Router()
const User = require('../models/users')
// Getting all
router.get('/', async (req, res) =>  {
//res.send('hellow world')

try{

    const users= await User.find()
    res.json(users)
}
catch(err)
{

}

})

// getting one
// router.get('/:id', (req, res) => {
//     res.send(req.params.id)
// })
// creating one
router.post('/', (req, res) => {
    
})

// updating one
router.patch('/', (req, res) => {
    
})
//Deleting one
router.delete('/:id', (req, res) => {
    
})
module.exports = router