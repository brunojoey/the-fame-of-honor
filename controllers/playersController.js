// find by position
const playersDB = require("../models/players");

module.exports = {
  findByPosition: function (req, res) {
    playersDB.findOne({ player_position: req.params.player_position })
      .then((playersModel) => res.json(playersModel))
      .catch((err) => res.status(422).json(err));
  }
}