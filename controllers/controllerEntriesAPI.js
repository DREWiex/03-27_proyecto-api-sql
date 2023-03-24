const {
    modelGetEntries,
    modelGetEntriesByEmail
} = require('../models/modelEntries');



//* obtener todas las entries
const getEntries = async (req, res) => {

    try {

        const data = await modelGetEntries();

        if(data){

            res.status(200).json({
                ok: true,
                data
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: 'ERROR: no hay entradas guardadas en la base de datos.'
            });

        };
        
    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });
    };

}; //!FUNC-GETENTRIES


const getEntriesByEmail = async (req, res) => {

    const email = req.params.email;

    try {

        const data = await modelGetEntriesByEmail(email);

        if(data){

            res.status(200).json({
                ok: true,
                data
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: `ERROR: no se han encontrado entradas con el email: ${email}.`
            });

        };

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.'
        });
    };

}; //!FUNC-GETENTRIESBYEMAIL


const getEntryByID = async (req, res) => {



}; //!FUNC-GETENTRYBYID


const addEntries = async (req, res) => {


    
}; //!FUNC-ADDENTRIES


const updateEntries = async (req, res) => {


    
}; //!FUNC-UPDATEENTRIES


const deleteEntries = async (req, res) => {


    
}; //!FUNC-DELETEENTRIES



module.exports = {
    getEntries,
    getEntriesByEmail,
    getEntryByID,
    addEntries,
    updateEntries,
    deleteEntries
};