const { Router } = require('express');
const express = require('express');

const UserController = require('./app/controllers/UserController')
const LoginController = require('./app/controllers/loginController');

const AuthMiddleware = require('./app/middlewares/auth');
const JogosController = require('./app/controllers/JogosController');

const app = express();
app.use(express.json());

const routes = new Router();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET, OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Content-Type', 'application/json');

    next();
});

routes.get('/', (req, res) => {
    res.json({ msg: "Projeto BD e Modelagem" });
});

routes.post('/users', UserController.store);
routes.post("/login", LoginController.store);

routes.use(AuthMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

routes.post('/jogos', JogosController.store);
routes.get('/jogos', JogosController.index);
routes.put('/jogos/:jogo_id', JogosController.update);
routes.delete('/:jogo_id/jogos', JogosController.delete)

module.exports = routes;