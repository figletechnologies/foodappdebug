const express = require('express')
const router = express.Router()
const Article = require('../models/articles')
// Getting all
router.get('/', async (req, res) =>  {
//res.send('hellow world')

try{

    const articles= await Article.find()
    res.json(articles)
}
catch(err)
{

}

})

// getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
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