const Yup = require('yup');
const Jogos = require('../models/Jogos');

class JogosController{
    async store(req, res){
        const schema = Yup.object().shape({
            timeA: Yup.string().required(),
            timeB: Yup.string().required(),
            data: Yup.string().required(),
            horario: Yup.string().required(),
            local: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({msg: "Dados inválidos"});
        }

/*        const marcado = await Jogos.findOne({where:{data: req.body.data}});

        if(marcado){
            return res.status(400).json({msg: "Jogo já marcado para p dia, data e horario!"});
        }*/

        const Jogo = await Jogos.create(req.body);

        return res.status(200).json(Jogo);
    }
}

module.exports = new JogosController();