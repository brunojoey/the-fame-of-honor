const router = require("express").Router();
const { findAll, findById, findTeamInductees } = require("../../controllers/teamsController");

// matches with '/api/teams'
router.route("/").get(findAll);

// matches with '/api/teams/_id'
router.route("/:_id").get(findById);

// matches with '/api/teams/_id/inductees'
router.route("/:_id/inductees").get(findTeamInductees);

module.exports = router;