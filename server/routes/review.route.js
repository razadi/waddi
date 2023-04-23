const { Router } = require('express');
const { check } = require('express-validator');
const { getReviews, addReview, patchReview } = require('../controllers/review.controller');
const { validarCampos } = require('../middlewares/valida.campos');
const { validarAuth } = require('../middlewares/valida.auth');

const router = Router();

// lista los items del review
router.get('/', getReviews);

// agregar un item en el review
router.post('/', [
  check('userId', 'No es un ID de usuario válido').isInt(),
  check('postId', 'No es un ID de post válido').isInt(),
  check('userId', 'El Id del usuario es obligatorio').not().isEmpty(),
  check('postId', 'El Id del post es obligatorio').not().isEmpty(),
  validarCampos
], addReview);

router.patch('/:userId/:postId', [
  check('userId', 'No es un ID de usuario válido').isInt(),
  check('postId', 'No es un ID de post válido').isInt(),
  check('rating', 'No es un valor válido').isInt(),
  check('userId', 'El Id del usuario es obligatorio').not().isEmpty(),
  check('postId', 'El Id del post es obligatorio').not().isEmpty(),
  check('rating', 'El rating es obligatorio').not().isEmpty(),
  validarCampos
], patchReview);

module.exports = router;