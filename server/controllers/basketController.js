const {Basket, BasketDevice, User} = require('../models/models')


class BasketController {
  async addToBasket (req, res) {
    const basketDevice = req.body
    const user = User.findAll()
    const basket = await Basket.findOne({where: user.id})
    
    //const basketDevice = await BasketDevice.create({deviceId})
    return res.json(basketDevice)
  }

  async getAll(req, res) {
    const basket = await Basket.find
  }
}