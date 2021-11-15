module.exports = () => {
  const controller = {};

  controller.adicionar = (req, res) => {
    res.status(200).json({ nome: "Adicionar casa"});
  }

  controller.listarCasas = (req, res) => {
    res.status(200).json({ nome: "Listar todas"});
  }

  controller.buscarPorNome = (req, res) => {
    res.status(200).json({ nome: "Buscar por nome: " + req.params.nome});
  }

  controller.buscarPorId = (req, res) => {
    res.status(200).json({ nome: "Buscar por ID: " + req.params.id});
  }

  controller.remover = (req, res) => {
    res.status(200).json({ nome: "Remover casa: " + req.params.id});
  }

  return controller;
}