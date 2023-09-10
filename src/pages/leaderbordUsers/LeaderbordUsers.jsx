import Navbar from "../../components/Navbar";
import "./LeaderbordUsers.css";

export default function LeaderbordTeams() {
  return (
    <div>
      <Navbar />
      <main className="leaderboard-container">
        <h2 id="header">Лучщие студенты</h2>
        <div id="leaderboard">
          <div className="leaderboard-header">
            <span>Ренг</span>
            <span>Имя</span>
            <span>Баллы</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">1</span>
            <span className="name">Иван</span>
            <span className="points">900</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">2</span>
            <span className="name">Алексей</span>
            <span className="points">800</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">3</span>
            <span className="name">Анна</span>
            <span className="points">700</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">4</span>
            <span className="name">Дмитрий</span>
            <span className="points">600</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">5</span>
            <span className="name">Сергей</span>
            <span className="points">500</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">6</span>
            <span className="name">Ольга</span>
            <span className="points">300</span>
          </div>
        </div>
      </main>
    </div>
  );
}
