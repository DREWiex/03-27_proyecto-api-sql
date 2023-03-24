const {Pool} = require('pg');

const {entries} = require('./queries');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: 'admin'
});



//* OBTENER TODAS LAS ENTRADAS
const modelGetEntries = async () => {

    let client, result;

    try {

        client = await pool.connect();

        const {rows} = await client.query(entries.queryGetEntries);

        result = rows;
        
    } catch (error) {

        console.log(error);
        throw error;

        
    } finally {

        client.release()

    };

    return result;

}; //!FUNC-MODELGETENTRIES


//* OBTENER LAS ENTRADAS POR E-MAIL
const modelGetEntriesByEmail = async (email) => {

    let client, result;

    try {

        client = await pool.connect();

        const data = await client.query(entries.queryGetEntriesByEmail, [email]);

        data.rowCount != 0 ? result = data.rows : result = false;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-MODELGETENTRIESBYEMAIL


//* CREAR UNA ENTRADA
const modelAddEntry = async (datos) => {

    let client, result;

    const {title, content, email, category} = datos;

    try {

        client = await pool.connect();

        const data = await client.query(entries.queryAddEntry, [title, content, email, category]);

        result = data;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-MODELADDENTRY


//* ACTUALIZAR UNA ENTRADA
const modelUpdateEntry = async (datos, id) => {

    let client, result;

    const {title, content, category} = datos;

    try {

        client = await pool.connect();

        const data = await client.query(entries.queryUpdateEntry, [title, content, category, id]);

        result = data;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };
    
    return result;

}; //!FUNC-MODELUPDATEENTRY


//* ELIMINAR UNA ENTRADA
const modelDeleteEntry = async (id) => {

    let client, result;

    try {

        client = await pool.connect();

        const data = await client.query(entries.queryDeleteEntry, [id]);

        result = data;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-MODELDELETEENTRY


//* BUSCAR ENTRADA POR ID
const modelSearchEntryByID = async (id) => {

    let client, result;

    try {

        client = await pool.connect();

        const {rowCount} = await client.query(entries.querySearchEntryByID, [id]);

        rowCount != 0 ? result = true : result = false;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release();

    };

    return result;

}; //!FUNC-MODELSEARCHENTRYBYID



module.exports = {
    modelGetEntries,
    modelGetEntriesByEmail,
    modelAddEntry,
    modelUpdateEntry,
    modelDeleteEntry,
    modelSearchEntryByID
};