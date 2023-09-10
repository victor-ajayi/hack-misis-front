import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar({ id }) {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="itam">ITAM.</span>
        <span className="clubs">clubs</span>
      </Link>

      <div className="right">
        <Link to="/LeaderbordTeams" className="nav-links">
          Лучшие команды
        </Link>
        <Link to="/LeaderbordUsers" className="nav-links">
          Лучшие студенты
        </Link>
        <Link to="/profile" className="profile-btn">
          Личный кабинет
        </Link>
      </div>
    </div>
  );
}
