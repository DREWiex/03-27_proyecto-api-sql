const express = require('express');
const router = express.Router();

const {
    getEntries, 
    getEntriesByEmail,
    addEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/controllerEntriesAPI')


//* GET ENTRIES
router.get('/', getEntries);

//* GET ENTRIES BY E-MAIL
router.get('/:email', getEntriesByEmail);

//* ADD ENTRY
router.post('/', addEntry);

//* UPDATE ENTRY
router.put('/:id', updateEntry);

//* ELIMINAR ENTRY
router.delete('/:id', deleteEntry);


module.exports = router;