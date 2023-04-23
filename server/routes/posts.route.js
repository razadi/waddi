const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/valida.campos');
const { validarAuth } = require('../middlewares/valida.auth');
const { getPosts, addPost, getPost, putPost, delPost } = require('../controllers/post.controller');
const { postExiste } = require('../helpers/validador.helper');

const router = Router();

// endpoint que regresa la lista de posts
router.get('/', getPosts);

// endpoint para agregar un  nuevo post
router.post('/', [
  validarAuth,
  check('title', 'El nombre es obligatorio').not().isEmpty(),
  check('description', 'La descripción es obligatoria').not().isEmpty(),
  validarCampos
], addPost);

// endpoint que regresa un post por id
router.get('/:id', [
  check('id', 'No es un ID válido').isInt(),
  check('id').custom(postExiste),
], getPost);

// endopoint para modificar post
router.put('/:id', [
  validarAuth,
  check('id', 'No es un ID válido').isInt(),
  check('id').custom(postExiste),
  validarCampos
], putPost);

// endpoint para eliminar post
router.delete('/:id', [
  validarAuth,
  check('id', 'No es un ID válido').isInt(),
  check('id').custom(postExiste)
], delPost);

module.exports = router;