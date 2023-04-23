const { Router } = require('express');
const { check } = require('express-validator');
// const { validarCampos, validarJWT, esAdminRole, tieneRole } = require('../middlewares');
// const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { getUsuarios, addUsuario, putUsuario, delUsuario, getusuario } = require('../controllers/usuario.controller');
const { mailYaExiste, userYaExiste, esUserAdmin } = require('../helpers/validador.helper');
const { validarCampos } = require('../middlewares/valida.campos');
const { validarAuth } = require('../middlewares/valida.auth');

const router = Router();

// endpoint que regresa la lista de usuarios
router.get('/', getUsuarios);

// endpoint para agregar usuario
router.post('/', [
  validarAuth,
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password debe de ser mínimo de 6 letras').isLength({ min: 6 }),
  check('mail', 'El correo no es válido').isEmail(),
  check('mail').custom(mailYaExiste),
  check('role', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
  validarCampos
], addUsuario);

// endpoint que regresa un usuario por id
router.get('/:id', [
  check('id', 'No es un ID válido').isInt(),
  check('id').custom(userYaExiste),
], getusuario);

// endopoint para modificar usuario
router.put('/:id', [
  validarAuth,
  check('id', 'No es un ID válido').isInt(),
  check('id').custom(userYaExiste),
  check('role', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
  validarCampos
], putUsuario);

// endpoint para eliminar usuario
router.delete('/:id', [
  validarAuth,
  check('id', 'No es un ID válido').isInt(),
  check('id').custom(userYaExiste)
], delUsuario);

module.exports = router;