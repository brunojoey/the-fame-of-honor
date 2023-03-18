const router = require("express").Router();
import { findAll, findById} from "../../controllers/teamsController";

// matches with '/api/teams'
router.route("/").get(findAll);

// matches with '/api/teams/id'
router.route("/:id").get(findById)

module.exports = router;