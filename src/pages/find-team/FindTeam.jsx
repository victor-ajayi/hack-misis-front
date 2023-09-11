import Navbar from "../../components/Navbar";
import "./FindTeam.css";

export default function FindTeam() {
  return (
    <div>
      <Navbar />
      <main className="find-teams-container">
        <span className="message">Эти команды ищут участников</span>
        <div className="filters-group">
          <button className="team-filter">Фронтенд</button>
          <button className="team-filter">Бэкенд</button>
          <button className="team-filter">Дизайн</button>
        </div>
        <div className="teams-container">
          <div className="find-teams--header">
            <span>Название команды</span>
            <span>
              Оставщиеся <br /> места
            </span>
            <span>Баллы</span>
          </div>
          <div className="find-teams--team">
            <div className="team--name">Команда 1</div>
            <div className="team--spaces">2</div>
            <div className="team--points">500</div>
          </div>
          <div className="find-teams--team">
            <div className="team--name">Команда 2</div>
            <div className="team--spaces">1</div>
            <div className="team--points">500</div>
          </div>
          <div className="find-teams--team">
            <div className="team--name">Команда 3</div>
            <div className="team--spaces">2</div>
            <div className="team--points">500</div>
          </div>
          <div className="find-teams--team">
            <div className="team--name">Команда 4</div>
            <div className="team--spaces">3</div>
            <div className="team--points">500</div>
          </div>
          <div className="find-teams--team">
            <div className="team--name">Команда 5</div>
            <div className="team--spaces">2</div>
            <div className="team--points">500</div>
          </div>
        </div>
      </main>
    </div>
  );
}
