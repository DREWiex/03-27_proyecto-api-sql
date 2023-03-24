const {
    modelGetAuthors,
    modelGetAuthorByEmail,
    modelAddAuthor,
    modelUpdateAuthor,
    modelDeleteAuthor,
    modelSearchAuthorByID,
    modelSearchAuthorByEmail
} = require('../models/modelAuthors');



const getAuthors = async (req, res) => {

    try {

        const data = await modelGetAuthors();

        if(data){
            res.status(200).json({
                ok: true,
                data: data.rows
            });

        }else{

            res.status(400).json({
                ok: false,
                msg: 'ERROR: no hay autores registrados en la base de datos.'
            });
        };
        
    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });
    };
    
}; //!FUNC-GETAUTHORS


const getAuthorByEmail = async (req, res) => {

    let email = req.params.email;

    try {
        
        const data = await modelGetAuthorByEmail(email);
        
        if(data){

            res.status(200).json({
                ok: true,
                data
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: `ERROR: no se ha encontrado ningún autor con el e-mail: ${email}.`
            });
        };
        
    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });
        
    };

}; //!FUNC-GETAUTHORBYEMAIL


const addAuthor = async (req, res) => {

    const email = req.query.email;

    try {

        const searchEmail = await modelSearchAuthorByEmail(email);

        if(!searchEmail){

            await modelAddAuthor(req.query);

            return res.status(201).json({
                ok: true,
                msg: 'El autor se ha registrado correctamente en la base de datos.',
            });

        } else {

            return res.status(400).json({
                ok: false,
                msg: `ERROR: el e-mail ${email} ya existe en la base de datos.`
            });

        };
        
    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });
        
    };

}; //!FUNC-ADDAUTHOR


const updateAuthor = async (req, res) => {

    const id = req.params.id;

    try {

        const searchAuthor = await modelSearchAuthorByID(id);

        if(searchAuthor){

            await modelUpdateAuthor(req.query, id);

            return res.status(200).json({
                ok: true,
                msg: `El autor con ID ${id} se ha actualizado correctamente.`,
            });

        } else {

            return res.status(400).json({
                ok: false,
                msg: `ERROR: no existe autor con ID: ${id}.`
            });
        };
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador',
            error
        });
    };

}; //!FUNC-UPDATEAUTHOR


const deleteAuthor = async (req, res) => {

    const id = req.params.id;

    try {

        const searchAuthor = await modelSearchAuthorByID(id);

        if(searchAuthor){

            await modelDeleteAuthor(id);

            return res.status(200).json({
                ok: true,
                msg: `El autor con ID ${id} ha sido eliminado de la base de datos correctamente.`
            });

        } else {

            return res.status(400).json({
                ok: false,
                msg: `ERROR: no se ha encontrado ningún autor con ID: ${id}.`
            });

        };
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });
    };

}; //!FUNC-DELETEAUTHOR



module.exports = {
    getAuthors,
    getAuthorByEmail,
    addAuthor,
    updateAuthor,
    deleteAuthor
};