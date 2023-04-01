import httpConfig from "./httpConfig.js";

const getTeams = () => {
  return httpConfig.get("/teams");
};

const getTeam = (_id) => {
  return httpConfig.get(`/teams/${_id}`);
};

const getTeamInductees = (_id) => {
  return httpConfig.get(`/teams/${_id}/inductees`);
};

const getPlayersByPosition = (position) => {
  return httpConfig.get(`/players/${position}`);
};

const honorAPI = { getTeams, getTeam, getTeamInductees, getPlayersByPosition };

export default honorAPI;