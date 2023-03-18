const router = require("express").Router();
import { findByPosition } from "../../controllers/playersController.js";

// matches with '/api/positions/:player_position'
router.route("/:player_position")
  .get(findByPosition);

module.exports = router;