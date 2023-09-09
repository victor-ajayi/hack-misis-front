import { useIsAuthenticated } from "react-auth-kit";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="navbar">
      <Link to="/">
        <span className="itam">ITAM.</span>clubs
      </Link>

      {isAuthenticated() && (
        <Link to="/login" className="profile">
          Личный кабинет
        </Link>
      )}
    </div>
  );
}
