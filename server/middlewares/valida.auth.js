const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const db =  require('../models');
const Usuario = db.usuario;

const validarAuth = async ( req = request, res = response, next ) => {
  const token = req.header('x-token');

  if ( !token ) {
    return res.status(401).json({
      msg: 'No hay token en la petición'
    });
  }

  try {
    const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const id = uid;
    console.log(id);
    const usuario = await Usuario.findOne({where: {id}});
    
    console.log(usuario);


    // Valido que el usuario exista
    if( !usuario ) {
      return res.status(401).json({
        msg: 'Token no válido - el usuario no existe'
      });
    }

    // Valido que uid sea valido
    if ( !usuario.status ) {
      return res.status(401).json({
        msg: 'Token no válido - usuario con estado: false'
      })
    }
    
    req.usuario = usuario;
    next();

  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no válido'
    })
  }
}

module.exports = {
  validarAuth
}