'use strict'
const util = require('util');
const connection = require('../bd/db');
const query = util.promisify(connection.query).bind(connection);

//Seleccionar todos los articulos
const seleccionar_articulos = async function(_req, res){
    const sql = `SELECT * FROM articulos`;
    const reg = await query(sql);
    res.status(200).send(reg);
}
//Buscar el articulo indicado
const buscar_articulo = async function(req, res){
    const articulo = req.params.articulo;
    const sql = `SELECT * FROM articulos WHERE cod_art = ${connection.escape(articulo)}`;
    const reg = await query(sql);
    res.status(200).send(reg);
}

module.exports = {
    seleccionar_articulos,
    buscar_articulo
};