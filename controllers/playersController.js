// find by position
const db = require("../models");

module.exports = {
  findByPosition: function (req, res) {
    db.players.find({ position: req.params.position })
      .then((playersModel) => res.json(playersModel))
      .catch((err) => res.status(422).json(err));
  }
}