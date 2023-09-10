import { UilAward, UilCog, UilEstate, UilUser } from "@iconscout/react-unicons";
import "./Sidebar.css";

export default function Sidebar() {
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
        <a href="#" className="sidebar-link">
          <UilCog color="#60d273" />
          Настройки
        </a>
      </div>
    </>
  );
}
