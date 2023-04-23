const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const db =  require('../models');
const Usuario = db.usuario;

// Lista de todos los usuarios
const getUsuarios = async (req = request, res = response) => {
  const query = { where: {status: true} };

  const [ total, usuarios ] = await Promise.all([
    Usuario.count(query),
    Usuario.findAll(query)
  ]);

  res.json({total, usuarios});
}

// Regresa un usuario por id
const getusuario = async(req = request, res = response) => {
  const {id} = req.params;
  const usuario = await Usuario.findOne({where: {id}});
  res.json(usuario);
}

// Agrega usuario
const addUsuario = async(req = request, res = response) => {    
  const { mail, password, name, role } = req.body;
  const usuario = new Usuario({ mail, password, name, role });
  // Encripto la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync( password, salt );
  // Guardar en BD
  await usuario.save();  
  res.json({usuario});
}

// Modifica usuario
const putUsuario = async(req = request, res = response) => {
  const {id} = req.params;
  const {password, ...body} = req.body;
  if (password) {
    const salt = bcryptjs.genSaltSync();
    body.password = bcryptjs.hashSync(password, salt);
  }
  const usuario = await Usuario.update(body, {where: {id}});
  res.json(usuario);
}

const delUsuario = async(req = request, res = response) => {
  const {id} = req.params;
  const usuario = await Usuario.destroy({where: {id}});
  res.json(usuario);
}

module.exports = {
  getUsuarios,
  getusuario,
  addUsuario,
  putUsuario,
  delUsuario,
}