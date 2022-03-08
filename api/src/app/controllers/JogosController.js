const Yup = require("yup");
const Jogos = require("../models/Jogos");
const User = require("../models/User");

class JogosController {
  async index(req, res) {
    const jogos = await Jogos.findAll({
      attributes: ["id","casa", "fora", "data", "horario", "local"],
    });
    return res.status(200).json(jogos);
  }
  async store(req, res) {
    const schema = Yup.object().shape({
      casa: Yup.string().required(),
      fora: Yup.string().required(),
      data: Yup.string().required(),
      horario: Yup.string().required(),
      local: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ msg: "Dados inválidos" });
    }

    const marcado = await Jogos.findOne({
      where: {
        casa: req.body.casa,
        data: req.body.data,
        horario: req.body.horario,
      },
    });

    if (marcado) {
      return res
        .status(400)
        .json({ msg: "Time já tem jogo marcado para esse dia!" });
    }

    const jogo = await Jogos.create(req.body);

    return res.status(200).json(jogo);
  }
  async update(req, res) {
    const schema = Yup.object().shape({
      casa: Yup.string().required(),
      fora: Yup.string().required(),
      horario: Yup.string().required(),
      local: Yup.string().required(),
      dataAnt: Yup.string().required(),
      data: Yup.string().when("dataAnt", (dataAnt, field) => {
        dataAnt ? field.required() : field;
      }),
      confirmData: Yup.string().when("data", (data, field) => {
        data ? field.required().oneOf([Yup.ref("data")]) : field;
      }),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ msg: "Campos inválidos." });
    }

    const {dataAnt, data} = req.body;
    const { jogo_id } = req.params;
    const jogo = await Jogos.findByPk(jogo_id);

    if(dataAnt != jogo.data) {
      const marc = await Jogos.findOne({ where: { casa, data } });
      if (marc) {
        return res.status(404).json({ msg: "O time possui um jogo marcado!" });
      }
    }

    const { id } = await jogo.update(req.body);

    return res.status(200).json({ msg: "Jogo Atualizado" });
  }

  async delete(req, res) {
    const { jogo_id } = req.params;
    const jogo = await Jogos.findByPk(jogo_id);

    if (jogo.user_id != req.jogoId) {
      return res.status(401).json({ msg: "Jogo inválido" });
    }

    const del = await Jogos.destroy({ where: req.body });
    return res.status(200).json({ msg: "Jogo excluído com sucesso!" });
  }
}

module.exports = new JogosController();
