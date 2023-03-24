const { Pool } = require('pg');

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

        result = data;
        
    } catch (error) {

        console.log(error);
        throw error;
        
    } finally {

        client.release() // mata el servidor

    };

    return result;

};


//* OBTENER ENTRADA POD ID


//* CREAR UNA ENTRADA


//* ACTUALIZAR UNA ENTRADA


//* ELIMINAR UNA ENTRADA


module.exports = {
    modelGetEntries,
    modelGetEntriesByEmail
};