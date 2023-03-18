// find all, find by team for inductees, find by team id
const teamsDB = require("../models/teams");

module.exports = {
  findAll: function (req, res) {
    teamsDB.find()
      .then((teamsModel) => res.json(teamsModel))
      .catch((err) => err.status(422).json(err));
  },
  findById: function (req, res) {
    teamsDB.findOne({ _id: req.params.id })
      .then((teamsModel) => res.json(teamsModel))
      .catch((err) => err.status(422).json(err));
  },
  // findTeamInductees: function (req, res) {

  // }
};