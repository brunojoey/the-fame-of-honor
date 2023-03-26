const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamsSchema = new Schema({
  team_name: { type: String, required: true },
  history: { type: String, requried: true },
  logo: { type: String, required: true },
  color: { type: String, required: true },
  border_color: { type: String, required: true }
});

// const playersSchema = new Schema({
//   full_name: { type: String, required: true },
//   position: { type: String, required: false },
//   team_name: { type: mongoose.Schema.Types.ObjectId, ref: "Teams"},
//   // team_name: { type: String, required: true },
//   notes: { type: String, required: false },
//   tenure: { type: String, required: true },
//   year_inducted: { type: Number, required: false }
// });

// const Players = mongoose.model("Players", playersSchema);
// module.exports = Players;

const teams = mongoose.model("teams", teamsSchema);
module.exports = teams;