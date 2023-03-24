const express = require('express');
const router = express.Router();

const {
    getEntries, 
    getEntriesByEmail,
    addEntries,
    updateEntries,
    deleteEntries
} = require('../controllers/controllerEntriesAPI')


//* GET ENTRIES
router.get('/', getEntries);

//* GET ENTRIES BY E-MAIL
router.get('/:email', getEntriesByEmail);

//* ADD ENTRY
router.post('/', addEntries);

//* UPDATE ENTRY
router.put('/:id', updateEntries);

//* ELIMINAR ENTRY
router.delete('/:id', deleteEntries);


module.exports = router;