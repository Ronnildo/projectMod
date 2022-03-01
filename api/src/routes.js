const { Router } = require('express');
const express = require('express');

const app = express();
app.use(express.json());

const routes = new Router();

routes.get('/', (req, res) => {
    res.json({ msg: "Projeto BD e Modelagem" });
})

module.exports = routes;