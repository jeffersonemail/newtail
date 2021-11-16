const models = require('../data/models');
const lord = require('../data/models/lord');
const Casa = models.Casa;
const Lord = models.Lord;

module.exports = () => {
  const controller = {};

  controller.adicionar = async (req, res) => {
    try {
      var newCasa = req.body;

      console.log(newCasa)

      if (isEmpty(newCasa) || typeof newCasa != 'object') {
        return error(res, 401, 'Json não enviado ou inválido.');
      }
      
      var newLord = newCasa.lord;
      
      newCasa = await saveCasa(newCasa);

      if (newLord != null) {
        newLord = await saveLord(newLord);
      }  

      if (newLord != null) {
        if (newLord.id != newCasa.LordId) {
          newCasa.LordId = newLord.id;
          newCasa = await newCasa.update( { LordId: newLord.id });
        }
        newCasa.Lord = newLord;
      }

      res.status(200).json(newCasa);
    } catch (err) {
      return error(res, 401, err);
    }
  }

  controller.listarCasas = async (req, res) => {
    var casas = await Casa.findAll(
      { include: ['Lord'], attributes: { exclude: ['LordId'] } }
    );
    res.status(200).json(casas);
  }

  controller.buscarPorNome = async (req, res) => {
    var casas = await Casa.findAll({ where: { nome: req.params.nome } })
    res.status(200).json(casas);
  }

  controller.buscarPorId = async (req, res) => {
    var casas = await Casa.findOne({ where: { id: req.params.id } })
    res.status(200).json(casas);
  }

  controller.remover = async (req, res) => {
    var oldCasa = await Casa.destroy({ where: { id: req.params.id } })
    res.status(200).json(oldCasa > 0 ? true : false);
  }

  return controller;
}

async function saveLord(lord) {
  var newLord = await Lord.findOne({ where: { nome: lord.nome } })

  if (newLord == null) {
    newLord = await Lord.create(lord);
  }

  return newLord;
}

async function saveCasa(casa) {
  var newCasa = await Casa.findOne({ include: ['Lord'], where: { nome: casa.nome } })

  if (newCasa == null) {
    newCasa = await Casa.create(casa, { include: ['Lord'] });
  } 

  return newCasa;
}

function error(res, status, message) {
  res.status(status).json({ message: isEmpty(message) ? 'Erro desconhecido. Verifique os dados enviados.' : message });
}

function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}