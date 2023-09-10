import Navbar from "../../components/Navbar";
import profile from "../../img/profile.jpg";
import Sidebar from "./Sidebar";
import "./User.css";

export default function User() {
  return (
    <>
      <Navbar id />
      <div className="user-page">
        <Sidebar />
        <main className="user-container">
          <div className="profile-header">
            <img src={profile} alt="" className="profile" />
            <div className="profile-container">
              <p className="profile--name">Иван Иванов</p>
              <p className="profile--role">Backend</p>
              <div className="bio">Bio</div>
              <p className="profile--bio">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="stack">
                <h3>Стек технологий</h3>
                <span className="stack-item">Python</span>
                <span className="stack-item">JavaScript</span>
                <span className="stack-item">C++</span>
              </div>
            </div>
          </div>
          <div className="find-team-group">
            <div>У тебя пока нет комнады {":("}</div>
            <a href="#" className="find-team">
              Искать команду
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
