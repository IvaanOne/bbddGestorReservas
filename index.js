// importamos dependencias
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');

// inicializamos la app
const app = express();
app.use(express.json());
app.use(morgan('combined', {stream: logger.stream}));

// Routing
const router = require('./router.js');
const router1 = require('./routerSalas');
app.use(router);
app.use(router1);

//endpoints raiz
app.get('/',(req, res) => res.send('Bienvenidos a la API REST'));

// definimos puerto
let fecha = new Date();
const PORT = process.env.PORT;
app.listen(PORT,()=>console.log(colors.rainbow(`La API está levantada en el puerto ${PORT} -- ${fecha}`)));


