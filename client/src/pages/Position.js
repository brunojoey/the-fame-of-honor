import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import honorAPI from "../utils/honorAPI";

const Position = () => {
  const [positionPage, setPositionPage] = useState([]);
  let params = useParams();
  console.log("params", params)
  const { position } = params;

  useEffect(() => {
    async function fetchData() {
      const { data } = await honorAPI.getPlayersByPosition(position);
      console.log("data", data);
      setPositionPage(data);
    };
    fetchData();
  });

  return (
    <div>
      <h1>{position}'s</h1>
      <div className="position-list">
        {positionPage.map((player) => {
          return (
            <div className="position-card" key={player.id}>
              <h3>{player.full_name}</h3>
              <p>Position: {player.position}</p>
              <p>Inducted by the {player.team}</p>
              {player.year_inducted ? <p>Inducted in {player.year_inducted}</p> : <></>}
              <p>Tenure: {player.tenure}</p>
              {player.notes ? <p>Notes: {player.notes}</p> : <></>}
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Position;