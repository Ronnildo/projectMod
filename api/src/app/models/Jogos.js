const { Model, Sequelize } = require('sequelize');

class Jogos extends Model{
    static init(sequelize){
        super.init({
            casa: Sequelize.STRING,
            fora: Sequelize.STRING,
            data: Sequelize.DATE,
            horario: Sequelize.TIME,
            local: Sequelize.STRING,
        },{
            sequelize,
        });
        return this;
    }
}

module.exports = Jogos;