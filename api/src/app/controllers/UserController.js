const Yup = require('yup');
const User = require('../models/User');
const express = require('express');

const app = express();
app.use(express.json());

class UserController {
    async index(req, res) {
        const user = await User.findAll();
        return res.status(200).json(user);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ msg: "Dados invválidos!" });
        }

        const userExists = await User.findOne({ where: { email: req.body.email } });
        if (userExists) {
            return res.status(400).json({ msg: "Email já cadastrado!" });
        }

        const { id, name, email, password } = await User.create(req.body);

        return res.status(200).json({ msg: "Usuário cadastrado com sucesso!" });
    }

    async update(req, res){
        const esquema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            passwordAntigo: Yup.string().min(6),
            password: Yup.string()
              .min(6)
              .when("passwordAntigo", (passwordAntigo, field) =>
                passwordAntigo ? field.required() : field
              ), //validação condicional
            confirmarPassword: Yup.string().when(
              "password",
              (password, field) =>
                password
                  ? field.required().oneOf([Yup.ref("password")])
                  : field
            ), //validar o novo password
          });
      
          if (!(await esquema.isValid(req.body))) {
            return res.status(400).json({ mensagem: "Campos invalidos" });
          }
      
          const user = await User.findOne({where: {email: req.body.email}});
      
          if (!user) {
            return res.status(404).json({ mensagem: "Usuario não cadastrado" });
          }
      
          const { id, name, email } = await user.update(req.body);
      
          return res.json({Msg: "Dados atualizados co sucesso!"});
    }
}

module.exports = new UserController();