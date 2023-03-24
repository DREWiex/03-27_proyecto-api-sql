const express = require('express');
const router = express.Router();

const {
    getEntries, 
    getEntriesByEmail,
    getEntryByID,
    addEntries,
    updateEntries,
    deleteEntries
} = require('../controllers/apiEntriesController')


//* GET ENTRIES
router.get('/', getEntries);

//* GET ENTRIES BY E-MAIL
router.get('/:email', getEntriesByEmail);

//* GET ENTRY BY ID
router.get('/:id', getEntryByID);

//* ADD ENTRY
router.post('/', addEntries);

//* UPDATE ENTRY
router.put('/:id', updateEntries);

//* ELIMINAR ENTRY
router.delete('/:id', deleteEntries);


module.exports = router;