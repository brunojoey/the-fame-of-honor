const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamsSchema = new Schema({
  team_name: { type: String, required: true },
  history: { type: String, requried: true },
  logo: { type: String, required: true },
  color: { type: String, required: true },
  border_color: { type: String, required: true }
});

const teams = mongoose.model("teams", teamsSchema);
module.exports = teams;