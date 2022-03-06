const { Model, Sequelize } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.VIRTUAL,
        password: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password_hash) {
        user.password = await bcrypt.hash(user.password_hash, 6);
      }
    });
    return this;
  }
  checkPassword(password_hash) {
    if (password_hash == this.password) {
      return true;
    }
  }
}

module.exports = User;
