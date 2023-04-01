import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Positions = () => {

  return (
    <div className="positions">
      <h1>Positions</h1>
      <div className="positions-list">
        <li className="position-item"><Link to="/positions/Quarterback" className="position-link">Quarterbacks</Link></li>
        <li className="position-item"><Link to="/positions/Running%20Back" className="position-link">Running Backs</Link></li>
        <li className="position-item"><Link to="/positions/Full%20Back" className="position-link">Full Backs</Link></li>
        <li className="position-item"><Link to="/positions/Wide%20Receiver" className="position-link">Wide Receivers</Link></li>
        <li className="position-item"><Link to="/positions/Tight%20End" className="position-link">Tight Ends</Link></li>
        <li className="position-item"><Link to="/positions/Offensive%20Tackle" className="position-link">Offensive Tackles</Link></li>
        <li className="position-item"><Link to="/positions/Guard" className="position-link">Guards</Link></li>
        <li className="position-item"><Link to="/positions/Center" className="position-link">Centers</Link></li>
        <li className="position-item"><Link to="/positions/Defensive%20Tackle" className="position-link">Defensive Tackles</Link></li>
        <li className="position-item"><Link to="/positions/Defensive%20End" className="position-link">Defensive Ends</Link></li>
        <li className="position-item"><Link to="/positions/Linebacker" className="position-link">Linebackers</Link></li>
        <li className="position-item"><Link to="/positions/Cornerback" className="position-link">Cornerbacks</Link></li>
        <li className="position-item"><Link to="/positions/Safety" className="position-link">Safeties</Link></li>
        <li className="position-item"><Link to="/positions/Kicker" className="position-link">Kickers</Link></li>
        <li className="position-item"><Link to="/positions/Punter" className="position-link">Punters</Link></li>
        <li className="position-item"><Link to="/positions/Coach" className="position-link">Coaches</Link></li>
        <li className="position-item"><Link to="/positions/Coordinator" className="position-link">Coordinators</Link></li>
        <li className="position-item"><Link to="/positions/Head%20Coach" className="position-link">Head Coaches</Link></li>
        <li className="position-item"><Link to="/positions/General%20Manager" className="position-link">General Managers</Link></li>
        <li className="position-item"><Link to="/positions/Executive" className="position-link">Exectuives</Link></li>
        <li className="position-item"><Link to="/positions/Owner" className="position-link">Owners</Link></li>
      </div>
    </div>
  )
};

export default Positions;