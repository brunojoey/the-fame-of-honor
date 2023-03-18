const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playersSchema = new Schema({
  full_name: { type: String, required: true },
  position: { type: String, required: false },
  team_name: { type: String, requried: true },
  notes: { type: String, required: false },
  years_active: { type: String, required: true },
  year_inducted: { type: Number, required: false }
});

const Players = mongoose.model("Players", playersSchema);
module.exports = Players;