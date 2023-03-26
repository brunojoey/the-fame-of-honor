const router = require("express").Router();
const { findByPosition } = require("../../controllers/playersController");

// matches with '/api/players/:position'
router.route("/:position").get(findByPosition);

module.exports = router;