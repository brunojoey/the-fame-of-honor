const router = require("express").Router();
const { findAll, findById, findTeamInductees } = require("../../controllers/teamsController");

// matches with '/api/teams'
router.route("/").get(findAll);

// matches with '/api/teams/id'
router.route("/:id").get(findById);

// matches with '/api/teams/id/inductees'
router.route("/:id/inductees").get(findTeamInductees);

module.exports = router;