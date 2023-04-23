const { request, response } = require('express')

const esAdminRole = ( req = request, res = response, next ) => {
  if ( !req.usuario ) {
    return res.status(500).json({
      msg: 'No existe usuario a validar'
    });
  }

  const { rol, nombre } = req.usuario;

  if ( rol !== 'ADMIN_ROLE' ) {
    return res.status(401).json({
      msg: `${ nombre } no es administrador - No tiene permisos`
    });
  }

  next();
}

const tieneRole = (...roles) => {  
  return (req, res = response, next) => {
    if ( !req.usuario ) {
      return res.status(500).json({
        msg: 'No existe usuario a validar'
      });
    }

    if ( !roles.includes( req.usuario.rol ) ) {
      return res.status(401).json({
        msg: `El servicio requiere uno de estos roles ${ roles }`
      });
    }
    next();
  }
}

module.exports = {
  esAdminRole,
  tieneRole
}