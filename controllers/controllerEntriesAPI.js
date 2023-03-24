const {
    modelGetEntries,
    modelGetEntriesByEmail,
    modelAddEntry,
    modelUpdateEntry,
    modelDeleteEntry,
    modelSearchEntryByID
} = require('../models/modelEntries');

const {modelSearchAuthorByEmail} = require('../models/modelAuthors');



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
            msg: 'ERROR: contacte con el administrador.',
            error
        });
    };

}; //!FUNC-GETENTRIESBYEMAIL


const addEntry = async (req, res) => {

    const email = req.body.email;

    try {

        const searchEmail = await modelSearchAuthorByEmail(email);

        if(searchEmail){

            await modelAddEntry(req.body);

            return res.status(201).json({
                ok: true,
                msg: 'Entrada creada con éxito.'
            });

        } else {

            return res.status(400).json({
                ok: false,
                msg: `ERROR: el e-mail '${email}' no existe en la base de datos. Solo los autores registrados pueden crear nuevas entradas.`
            });

        };
        
    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });    
    };
    
}; //!FUNC-ADDENTRY


const updateEntry = async (req, res) => {

    const id = req.params.id;

    try {

        const searchEntry = await modelSearchEntryByID(id);

        if(searchEntry){

            await modelUpdateEntry(req.body, id);

            return res.status(200).json({
                ok: true,
                msg: `La entrada con ID '${id}' se ha actualizado con éxito.`
            });

        } else {

            return res.status(400).json({
                ok: false,
                msg: `No existe ninguna entrada con el ID '${id}' en la base de datos.`
            });

        };

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });  
    };
    
}; //!FUNC-UPDATEENTRY


const deleteEntry = async (req, res) => {

    const id = req.params.id;

    try {
        
        const searchEntry = await modelSearchEntryByID(id);

        if(searchEntry){

            await modelDeleteEntry(id);

            return res.status(200).json({
                ok: true,
                msg: `La entrada con ID '${id}' se ha eliminado satisfactoriamente.`
            });

        } else {

            return res.status(400).json({
                ok: false,
                msg: `No se ha encontrado ninguna entrada con ID '${id}' en la base de datos.`
            });
        };

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador',
            error
        });
    };
    
}; //!FUNC-DELETEENTRY



module.exports = {
    getEntries,
    getEntriesByEmail,
    addEntry,
    updateEntry,
    deleteEntry
};