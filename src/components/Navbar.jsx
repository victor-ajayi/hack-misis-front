import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar({ id }) {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="itam">ITAM.</span>clubs
      </Link>

      <Link to="/profile" className="profile-btn">
        Личный кабинет
      </Link>
    </div>
  );
}
