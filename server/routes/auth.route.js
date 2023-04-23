const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/valida.campos');
const { login } = require('../controllers/auth.controller');

const router = Router();

router.post('/login', [
    check('mail', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
  ], login);

module.exports = router;