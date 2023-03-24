const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


// body-parser
app.use(express.urlencoded({ extended: false }));    // Parse application/x-www-form-urlencoded
app.use(express.json());                             // Parse application/json

// carpeta public
app.unsubscribe(express.static(`${__dirname}/public`));

// rutas
app.use('/api/entries', require('./routers/routerEntriesAPI'));
app.use('/api/authors', require('./routers/routerAuthorsAPI'));

// 404
app.use((req, res, next) => {

    res.status(404).send('Página no encontrada');

});


app.listen(port, () => {
    console.log(`Servidor a la escucha del puerto: ${port}`);
});