import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import honorAPI from "../utils/honorAPI";

const Team = () => {
  const [team, setTeam] = useState({});
  const [teamInductees, setTeamInductees] = useState([])
  let params = useParams();
  const { _id } = params;

  useEffect(() => {
    async function fetchTeamData() {
      const { data } = await honorAPI.getTeam(_id);
      setTeam(data);
    }

    async function fetchInducteeData() {
      const { data } = await honorAPI.getTeamInductees(_id);
      console.log("data data data", data);
      // for (var i = 0; i < data.length; i++) {
      //   console.log("team team name", team.team_name)
      //   console.log("data team name", data[i].team_name)
      //   if (team.team_name === data[i].team_name) {
      //     console.log("data data inductees", data.inductees)
      //     setTeamInductees(data[i].inductees);
      //   } else {
      //     break;
      //   }
      //   // while (team.team_name == data[i].team_name) {
      //   // }
      // }
      setTeamInductees(data[0].inductees);

    }

    fetchTeamData();
    fetchInducteeData();
  })

  return (
    <div className="team">
      <h1 style={{color: team.color}}>{team.team_name}</h1>
      <div className="team-info">
        <img src={team.logo} alt={team.team_name + " logo"} width="300px"/>
        <p>{team.history}</p>
      </div>
      <h2 style={{color: team.color}}>Team Inductees</h2>
      <div className="inductee-list">
        {teamInductees.map((inductee) => {
          return (
          <div className="inductee-card" style={{backgroundColor: team.color, borderColor: team.border_color}} key={inductee.full_name}>
            <h3>{inductee.full_name}</h3>
            <p>Position: {inductee.position}</p>
            <p>Tenure: {inductee.tenure}</p>
            {inductee.year_inducted ? <p>Year Inducted: {inductee.year_inducted}</p> : <></>}
            {inductee.notes ? <p>Notes: {inductee.notes}</p> : <></>}
          </div>
          )
        })}
      </div>
    </div>
  )
};

export default Team;