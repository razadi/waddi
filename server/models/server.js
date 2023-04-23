const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require('../models');

class Server {

  constructor() {
    // cosntantes
    this.app  = express();
    this.port = process.env.PORT;
    this.userPath = '/api/usuarios';
    this.authPath = '/api/auth';
    this.postPath = '/api/posts';
    this.bitaPath = '/api/bitacora';
    this.reviwPath = '/api/reviews';

    // Conectar a base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas
    this.routes();
  }

  conectarDB() {
    db.sequelize.authenticate()
      .then(() => console.log('db connected...'))
      .catch(err => console.error(`Error: ${err}`));

    // db.sequelize.sync({ force: false })
    //   .then(() => console.log('synchronization done!'))
    //   .catch(err => console.error(`Error: ${err}`));
  }

  middlewares() {
    var corsOptions = {
      origin: [`http://localhost:${this.port}`, 'http://localhost:4200']
    };
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    // this.app.use(bodyParser.json());
    // this.app.use(bodyParser.urlencoded({ extended: true }));

    // Directorio Público
    // this.app.use(express.static('public'));
  }

  routes() {        
    this.app.use(this.authPath, require('../routes/auth.route'));
    this.app.use(this.userPath, require('../routes/usuarios.route'));
    this.app.use(this.postPath, require('../routes/posts.route'));
    this.app.use(this.bitaPath, require('../routes/bitacora.route'));
    this.app.use(this.reviwPath, require('../routes/review.route'));
  }

  listen() {
    this.app.listen( this.port, () => console.log(`Servidor corriendo en puerto ${this.port}`));
  }

};

module.exports = Server;