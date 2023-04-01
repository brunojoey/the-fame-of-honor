import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import honorAPI from "../utils/honorAPI";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const { data } = await honorAPI.getTeams();
      console.log("data", data);
      setTeams(data);
    }
    fetchData();
  })

  return (
    <div className="teams">
      <h1>Teams</h1>
      <div className="teams-list">
        {teams.map((team) => {
          return (
            <div className="team-card">
              <img src={team.logo} alt={team.team_name + " logo"}/>
              <h2 onClick={() => navigate(`/teams/${team._id}`)}>{team.team_name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default Teams;