const express = require('express')
const router = express.Router()
//importamos express-validator
const { body } = require('express-validator/check')
//importamos el controlador
const { proyectosHome, formularioProyecto, nuevoProyecto} = require('../controllers/proyectosController')

module.exports = function (){

    router.get('/', proyectosHome)
    router.get('/nuevo-proyecto', formularioProyecto)
    router.post(
        '/nuevo-proyecto',
        body('nombre').not().isEmpty().trim().escape(),
        nuevoProyecto
    )


    return router;

}

