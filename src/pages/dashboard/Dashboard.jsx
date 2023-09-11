import Navbar from "../../components/Navbar";
import Sidebar from "../user/Sidebar";
import "./Dashboard.css";

export default function Team() {
  return (
    <div>
      <Navbar />
      <div className="dashboard-page">
        <Sidebar />
        <main className="user-container">
          <h2 id="header1">Расписание ивентов</h2>

          <table className="table">
            <tr>
              <th>Дата</th>
              <th>Событие</th>
              <th>Сообщество</th>
            </tr>
            <tr>
              <td>08.09.2023</td>
              <td>ITAM.hack</td>
              <td>Хакатон клуб</td>
            </tr>
            <tr>
              <td>21.09.2023</td>
              <td>Лекция №1 по дизайну</td>
              <td>Дизайнеры DAMN</td>
            </tr>
            <tr>
              <td>01.10.2023</td>
              <td>Лекция "Введение в машинное обучение"</td>
              <td>AI Knowledge Club</td>
            </tr>
          </table>
        </main>
      </div>
    </div>
  );
}
