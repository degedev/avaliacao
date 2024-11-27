const { Sequelize } = require('sequelize')

const connection = new Sequelize('sqlite::memory')
const Livro = connection.define('livro', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  autor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, 
);

(async () => {
  await connection.sync({ force: true });
})()

module.exports = { connection, Livro}