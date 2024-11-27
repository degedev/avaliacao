const { where } = require("sequelize")
const Livro = require('../database/db').Livro

module.exports = {
  async create(req, res) {
    const { titulo, autor } = req.body
    await Livro.create({
      titulo,
      autor,
    })
    return res.status(201).json({titulo, autor})
  },

  async list(req, res) {
    const livros = await Livro.findAll()
    return res.status(200).json(livros)
  },

  async delete(req, res) {
    const { livroId } = req.params
    await Livro.delete({where: {id: livroId}})
    res.status(200).send()
  }
}