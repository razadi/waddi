const validaCampos = require('./valida.campos');
const validaAuth = require('./valida.auth');
const validaRoles = require('./valida.roles');

module.exports = {
    ...validaCampos,
    ...validaAuth,
    ...validaRoles,
}