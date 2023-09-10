import Navbar from "../../components/Navbar";
import { UilAward } from "@iconscout/react-unicons";
import "./Team.css";

export default function Team() {
  return (
    <div>
      <Navbar />
      <main className="team-container">
        <h1>Команда 1</h1>
        <div className="team-list">
          <div className="team-list--header">
            <span>Имя</span>
            <span>Роль</span>
            <span>Тэги</span>
            <span>Баллы</span>
          </div>
          <div className="team--member">
            <span className="name">First Last</span>
            <span className="role">Frontend</span>
            <span className="tags">React</span>
            <span className="points">300</span>
          </div>
          <div className="team--member">
            <span className="name">First Last</span>
            <span className="role">Frontend</span>
            <span className="tags">Angular</span>
            <span className="points">300</span>
          </div>
          <div className="team--member">
            <span className="name">First Last</span>
            <span className="role">Backend</span>
            <span className="tags">C++</span>
            <span className="points">300</span>
          </div>
          <div className="team--member">
            <span className="name">First Last</span>
            <span className="role">Backend</span>
            <span className="tags">Python</span>
            <span className="points">300</span>
          </div>
          <div className="team--member">
            <span className="name">First Last</span>
            <span className="role">Frontend</span>
            <span className="tags">JavaScript</span>
            <span className="points">300</span>
          </div>
        </div>

        <h2 className="achievements">Достижения</h2>
        <div className="event">
          <span>ITAM Hack 1</span>
          <UilAward color="#FFD700" size="33" />
        </div>
        <div className="event">
          <span>ITAM Hack 1</span>
          <UilAward color="#c0c0c0" size="33" />
        </div>
        <div className="event">
          <span>ITAM Hack 1</span>
          <UilAward color="#cd7f32" size="33" />
        </div>
      </main>
    </div>
  );
}
