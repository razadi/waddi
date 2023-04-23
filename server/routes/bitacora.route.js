const { Router } = require('express');
const { check } = require('express-validator');
const { getBitacora, addBitacora } = require('../controllers/bitacora.controller');
const { validarCampos } = require('../middlewares/valida.campos');
const { validarAuth } = require('../middlewares/valida.auth');

const router = Router();

// lista los items de la bitacora
router.get('/', getBitacora);

// agregar un item en la biotacora
router.post('/', [
  validarAuth,
  check('userId', 'No es un ID de usuario válido').isInt(),
  check('postId', 'No es un ID de post válido').isInt(),
  check('userId', 'El Id del usuario es obligatorio').not().isEmpty(),
  check('postId', 'El Id del post es obligatorio').not().isEmpty(),
  check('action', 'La acción es obligatoria').not().isEmpty(),
  validarCampos
], addBitacora);

module.exports = router;