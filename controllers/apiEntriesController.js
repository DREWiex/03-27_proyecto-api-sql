const {
    getAllEntries,
    getAllEntriesByEmail
} = require('../models/modelEntries');



//* obtener todas las entries
const getEntries = async (req, res) => {

    try {

        const data = await getAllEntries();

        if(data){

            res.status(200).json({
                ok: true,
                data: data.rows
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: 'ERROR: no se han podido obtener todas las entries.'
            });

        };
        
    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.'
        });

    };

}; //!FUNC-GETENTRIES


const getEntriesByEmail = async (req, res) => {

    let data;
    let email = req.params.email;

    try{

    if(email){

        data = await getAllEntriesByEmail(email);

        res.status(200).json({
            ok: true,
            data: data.rows
        });

    }else{

        res.status(400).json({
            ok: false,
            msg: 'ERROR: no se ha podido obtener la entry.'
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