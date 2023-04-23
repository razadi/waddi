const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const db =  require('../models');
const { generaToken } = require('../helpers/jwt.helper');
const Usuario = db.usuario;
// const Usuario = require('../models/usuario.model');
// const { generaToken } = require('../helpers/jwt.helper');

const login = async(req = request, res = response) => {
  const { mail, password } = req.body;  
  try {
    // Valido que exista el email
    const usuario = await Usuario.findOne({where: {mail}});
    if (!usuario) {
      return res.status(400).json({
        msg: 'El correo o Password no son correctos'
      });
    }

    // Valido que esté activo
    if (!usuario.status) {
      return res.status(400).json({
        msg: 'El correo o Password no son correctos'
      });
    }

    // Valido la contraseña
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if ( !validPassword ) {
      return res.status(400).json({
        msg: 'El correo o Password no son correctos'
      });
    }

    // Genero el JWT
    const token = await generaToken(usuario.id);

    res.json({
      usuario,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    });
  }   

}

module.exports = {
  login
}
