import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="navbar">
      <p onClick={handleClick}>
        <span className="itam">ITAM.</span>clubs
      </p>

      <Link to="/login" className="profile">
        Личный кабинет
      </Link>
    </div>
  );
}
