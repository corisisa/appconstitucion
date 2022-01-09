'use strict'
const { Router } = require('express');
const api = Router();
var articulosController = require('../controllers/articulosController');

api.get('/verTodosLosArticulos/', articulosController.seleccionar_articulos);
api.get('/buscarArticulo/:articulo', articulosController.buscar_articulo);

module.exports = api;