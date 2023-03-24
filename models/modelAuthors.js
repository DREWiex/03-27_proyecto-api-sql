const {Pool} = require('pg');

const {authors} = require('./queries')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: "admin"
});



//* OBTENER TODOS LOS AUTORES
const modelGetAuthors = async () => {

    let client, result;

    try {

        client = await pool.connect();

        const data = await client.query(authors.queryGetAuthors);

        data ? result = data : result = false;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-MODELGETAUTHORS


//* OBTENER AUTOR POE E-MAIL
const modelGetAuthorByEmail = async (email) => {

    let client, result;

    try {

        client = await pool.connect();

        const data = await client.query(authors.queryGetAuthorByEmail, [email]);

        data.rowCount != 0 ? result = data.rows : result = false;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-MODELGETAUTHORBYEMAIL


//* CREAR NUEVO AUTOR
const modelAddAuthor = async (datos) => {

    let client, result;

    const {name, surname, email, image} = datos;

    try {

        client = await pool.connect()

        const data = await client.query(authors.queryAddAuthor, [name, surname, email, image]);

        result = data;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-MODELADDAUTHOR


//* ACTUALIZAR AUTOR
const modelUpdateAuthor = async (datos, id) => {

    let client, result;

    const {name, surname, email, image} = datos;

    try {

        client = await pool.connect();

        const data = await client.query(authors.queryUpdateAuthor, [name, surname, email, image, id]);

        result = data;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-UPDATEONEAUTHOR


//* ELIMINAR AUTOR
const modelDeleteAuthor = async (id) => {

    let client, result;

    try {

        client = await pool.connect();

        const data = await client.query(authors.queryDeleteAuthor, [id]);

        result = data;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-MODELDELETEAUTHOR


//* BUSCAR AUTOR POR ID
const modelSearchAuthorByID = async (id) => {

    let client, result;

    try {

        client = await pool.connect();

        const {rowCount} = await client.query(authors.querySearchAuthorByID, [id]);

        rowCount == 0 ? result = false : result = true;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release()

    };

    return result;

}; //!FUNC-MODERLGETAUTHORBYID


//* BUSCAR AUTOR POR E-MAIL
const modelSearchAuthorByEmail = async (email) => {

    let client, result;

    try {

        client = await pool.connect();

        const {rowCount} = await client.query(authors.querySearchAuthorByEmail, [email]);

        rowCount == 0 ? result = false : result = true;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-MODELSEARCHAUTHORBYEMAIL



module.exports = {
    modelGetAuthors,
    modelGetAuthorByEmail,
    modelAddAuthor,
    modelUpdateAuthor,
    modelDeleteAuthor,
    modelSearchAuthorByID,
    modelSearchAuthorByEmail,
};