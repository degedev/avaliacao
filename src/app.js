const express = require('express')
const cookieParser = require('cookie-parser')
require('./database/db')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "uploads")))
const livroRouter = require('./router/livro')
app.use('/livro', livroRouter)

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running', status: 'ok' });
});

app.get('/acesso/:usuario', (req, res) => {
  try{
    const { usuario } = req.params
    console.log(usuario)
    //countChar(usuario)
    const token = jwt.sign({usuario: usuario.slice(2)}, 'secret', { expiresIn: '30m'})
    return res.cookie('token', token, {httpOnly: true}).status(201).send()
  } catch(err){
    return res.status(400).json({message: 'Usuario invalido'})
  }
})

app.get('/fatorial', (req, res) => {
  
  }
)

const countChar = (usuario) => {
  if(usuario.length() < 3) {
    throw new Error()
  }
}
module.exports = app
