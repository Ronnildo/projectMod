const { Router } = require('express');
const express = require('express');

const UserController = require('./app/controllers/UserController')
const LoginController = require('./app/controllers/loginController');

const AuthMiddleware = require('./app/middlewares/auth');
const JogosController = require('./app/controllers/JogosController');

const app = express();
app.use(express.json());

const routes = new Router();

routes.get('/', (req, res) => {
    res.json({ msg: "Projeto BD e Modelagem" });
});

routes.post('/users', UserController.store);
routes.post("/login", LoginController.store);

routes.post('/jogos', JogosController.store);

routes.use(AuthMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

module.exports = routes;