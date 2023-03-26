// find all, find by team for inductees, find by team id
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.teams.find({})
      .then((teamsModel) => res.json(teamsModel))
      .catch((err) => err.status(422).json(err));
  },
  findById: function (req, res) {
    db.teams.findOne({ _id: req.params.id })
      .then((teamsModel) => res.json(teamsModel))
      .catch((err) => err.status(422).json(err));
  },
  findTeamInductees: function (req, res) {
    db.teams.aggregate([
      {
        $match: { _id: req.params.id },
        $lookup: {
          from: "players",
          localField: "team_name",
          foreignField: "team_name",
          as: "inductees"
        }
      }
    ])
    .then((teamsModel) => res.json(teamsModel))
    .catch((err) => err.status(422).json(err));
  }
};
