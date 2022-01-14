const express = require('express')
const Vendor = require('../models/vendors')
const router = express.Router()
// Getting all
router.get('/', async (req, res) =>  {
//res.send('hellow world')

try{

    const vendors= await Vendor.find()
    res.json(vendors)
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