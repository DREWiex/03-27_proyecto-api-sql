const express = require('express');
const router = express.Router();

const {
    getAuthors,
    getAuthorByEmail,
    addAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controllers/controllerAuthorsAPI');


//* GET ALL THE AUTHORS
router.get('/', getAuthors);


//* GET AUTHOR BY E-MAIL
router.get('/:email', getAuthorByEmail);


//* POST CREATE AUTHOR
router.post('/nuevo', addAuthor);


//* PUT UPDATE AUTHOR
router.put('/editar/:id', updateAuthor);


//* DELETE AUTHOR
router.delete('/eliminar/:id', deleteAuthor);


module.exports = router;