const { Router } = require('express');
const express = require('express');
const User = require('./app/models/User');

const UserController = require('./app/controllers/UserController');

const app = express();
app.use(express.json());

const routes = new Router();

routes.get('/', (req, res) => {
    res.json({ msg: "Projeto BD e Modelagem" });
});

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

module.exports = routes;