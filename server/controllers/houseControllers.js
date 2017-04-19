const Model = require('../models/house');

let House = {}
House.create = (req, res) => {
  let model = new Model ({
    title : req.body.title,
    price : req.body.price,
    description : req.body.description,
    owner : req.body.owner,
    address : req.body.address,
    image : req.body.image,
    latitude : req.body.latitude,
    longitude : req.body.longitude
  })
  model.save((err, result) => {
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
}
House.getAll = (req, res) => {
  Model.find({}, (err, result) => {
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
}
House.getOne = (req, res) => {
  Model.findOne({_id : req.params.id}, (err, result) => {
    if(err) {
      res.send(err)
    }else {
      res.send(result)
    }
  })
}
House.update = (req, res) => {
  Model.update({_id : req.params.id}, { $set: {
    title : req.body.title,
    price : req.body.price,
    description : req.body.description,
    owner : req.body.owner,
    address : req.body.address,
    image : req.body.image,
    latitude : req.body.latitude,
    longitude : req.body.longitude,
  }}).then((house) => {
    res.send(house)
  }).catch((err) => {
    res.send(err)
  })
}

House.delete = (req, res) => {
  Model.remove({_id : req.params.id})
  .then((house) => {
    res.send(house)
  }).catch((err) => {
    res.send(err)
  })
}

module.exports = House;
