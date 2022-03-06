const { Model} = require('sequelize');
const { Sequelize}=require('sequelize')
class Jogos extends Model{
    static init(sequelize){
        super.init({
            timeA: Sequelize.STRING,
            timeB: Sequelize.STRING,
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