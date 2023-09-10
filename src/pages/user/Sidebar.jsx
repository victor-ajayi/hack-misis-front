import { UilAward, UilCog, UilEstate, UilUser } from "@iconscout/react-unicons";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  function handleLogOut() {
    Cookies.remove("_id");
    navigate("/");
  }

  return (
    <>
      <div className="sidebar">
        <div>
          <div className="sidebar--top">
            <a href="#" className="sidebar-link">
              <UilUser color="#60d273" />
              Профиль
            </a>
            <a href="#" className="sidebar-link">
              <UilEstate color="#60d273" />
              Дэшборд
            </a>
            <a href="#" className="sidebar-link">
              <UilAward color="#60d273" />
              Достижения
            </a>
          </div>
        </div>
        <div className="bottom">
          <a href="#" className="sidebar-link">
            <UilCog color="#60d273" />
            Настройки
          </a>
          <a href="#" className="sidebar-link" onClick={handleLogOut}>
            <UilCog color="#60d273" />
            Выйти
          </a>
        </div>
      </div>
    </>
  );
}
