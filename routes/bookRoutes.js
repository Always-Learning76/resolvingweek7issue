const express = require('express');
const router = express.Router()
const BookCtrl = require('../controllers/bookControllers.js')


router.post('/books', BookCtrl.createNewBook)
    // retrieve a new bookdetails from req.body

//GET request to /books fetch all books
router.get('/books', BookCtrl.fetchBooks) 
//GET request to /books/:id to fetch specific/single books

router.get('/books/:id', BookCtrl.singleBook)
   
    router.put('/books/:id', BookCtrl.updateSingleBook) 

    router.delete('/books/:id', BookCtrl.delete) 

    module.exports = router