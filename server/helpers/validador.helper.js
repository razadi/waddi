const db =  require('../models');
const Usuario = db.usuario;
const Post = db.post;


const esUserAdmin = async (id) => {
  const user = await Usuario.findOne({where: {id}});
  if (!user) {
    throw new Error(`El id no existe ${id}`);
  }
  if (user.role !== 'ADMIN_ROLE') {
    throw new Error(`El usuario ${name} no es administrador`);
  }
}

const mailYaExiste = async (mail = '') => {
  const existeMail = await Usuario.findOne({where: {mail}});
  if ( existeMail ) {
    throw new Error(`El correo: ${mail}, ya está registrado`);
  }
}

const userYaExiste = async (id) => {
  const existeUser = await Usuario.findOne({where: {id}});
  if ( !existeUser ) {
      throw new Error(`El id no existe ${id}`);
  }
}

const postExiste = async (id) => {
  const existePost = await Post.findOne({where: {id}});
  if ( !existePost ) {
      throw new Error(`El post con id ${id} no existe`);
  }
};

module.exports = {
  esUserAdmin,
  mailYaExiste,
  userYaExiste,
  postExiste
};