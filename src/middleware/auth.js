require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
  async auth(req, res, next) {
    const token = req.cookies.token
    if(!token) return res.status(401).json({message: 'Unauthorized'})
    try {
      const decodedToken = jwt.verify(token, 'secret')
      req.user = decodedToken
      next()
    } catch(err) {
      res.status(401).send({message: 'Invalid token'})
    }
  }
}