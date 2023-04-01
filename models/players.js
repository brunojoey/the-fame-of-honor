const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teams = require("./teams");

const playersSchema = new Schema({
  full_name: { type: String, required: true },
  position: { type: String, required: false },
  team_name: { type: mongoose.Schema.Types.ObjectId, ref: teams},
  team: { type: String, required: true },
  notes: { type: String, required: false },
  tenure: { type: String, required: true },
  year_inducted: { type: Number, required: false }
});

const players = mongoose.model("players", playersSchema);
module.exports = players;