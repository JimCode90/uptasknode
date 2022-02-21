const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//Creamos la conexion a la base datos
const db = require('./config/db')

// -----VERIFICAMOS LA CONEXION A LA BASE DE DATOS---------
// db.authenticate()
//     .then(() => console.log('Conectado al Servidor'))
//     .catch(error => console.log(error))

//----- Creamos la tabla proyectos
require('./models/Proyectos')
db.sync()
    .then(() => console.log("ok!"))
    .catch(err => console.log(err))

//crear una aplicacion de express
const app = express();

// Cargamos archivos estaticos
app.use(express.static('public'));

// Habilitamos template engine (PUG)
app.set('view engine', 'pug');

// Añadimos la carpeta de vistas
app.set('views', path.join(__dirname, './views'))

// Habilitamos bodyParse para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }))

// Importamos Rutas
app.use('/', routes());


//detallamos el puerto donde queremos que corra el app
app.listen(3000);