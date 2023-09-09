import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <p>
        <span className="itam">ITAM.</span>clubs
      </p>

      <Link to="/login" className="profile">
        Личный кабинет
      </Link>
    </div>
  );
}
