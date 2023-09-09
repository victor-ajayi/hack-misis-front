import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div>
      <Navbar />
      <main className="main-container">
        <div className="header">
          <h1>
            ITAM.<span id="clubs">clubs</span> — единая платформа для
            организации <br />
            студенческой проектной деятельности
          </h1>
        </div>

        {!isAuthenticated() && (
          <button className="register" onClick={handleClick}>
            Загеристрироваться!
          </button>
        )}

        <section className="clubs-container">
          <h3>Познакомьтесь с сообществами</h3>
          <h5>Выбирай, что нравится!</h5>

          <div className="club-group">
            <div className="club">
              <p className="club--header">Хакатон клуб</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club">
              <p className="club--header">Дизайнеры DAMN</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club">
              <p className="club--header">Gamedev club</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club">
              <p className="club--header">AI Knowledge Club</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club">
              <p className="club--header">Робототехника</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club">
              <p className="club--header">Курсы от ITAM</p>
              <p className="club--subheader"></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
