const Yup = require('yup');
const User = require('../models/User');

class UserController {
    async index(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
        });
        const email = await User.findOne({ where: { email: req.body.email } });

        return res.status(200).json(email);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(8),
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
}

module.exports = new UserController();