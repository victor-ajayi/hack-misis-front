import Navbar from "../../components/Navbar";
export default function LeaderbordTeams() {
  return (
    <div>
      <Navbar />
      <main className="leaderboard-container">
        <h2 id="header">Лучщие команды</h2>
        <div id="leaderboard">
          <div className="leaderboard-header">
            <span>Ренг</span>
            <span>Имя</span>
            <span>Баллы</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">1</span>
            <span className="name">Команда 1</span>
            <span className="points">900</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">2</span>
            <span className="name">Команда 2</span>
            <span className="points">800</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">3</span>
            <span className="name">Команда 3</span>
            <span className="points">700</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">4</span>
            <span className="name">Команда 4</span>
            <span className="points">600</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">5</span>
            <span className="name">Команда 5</span>
            <span className="points">500</span>
          </div>
          <div className="leaderboard--student">
            <span className="number">6</span>
            <span className="name">Команда 6</span>
            <span className="points">300</span>
          </div>
        </div>
      </main>
    </div>
  );
}
