import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Register.css";

export default function Register() {
  return (
    <div>
      <Navbar />
      <div className="form-container">
        <form action="">
          <div className="form--header">
            <Link to="/" className="itam-header">
              <span className="itam">ITAM.</span>clubs
            </Link>
            <p className="register-subheader">Скорее присоединяйся к нам!</p>
          </div>
          <label htmlFor="surname">Введите фамилию</label>
          <input type="text" name="surname" id="surname" className="item" />
          <label htmlFor="name">Введите имя</label>
          <input type="text" name="name" id="name" className="item" />
          <label htmlFor="email">Введите почту</label>
          <input type="text" name="email" id="email" className="item" />
          <label htmlFor="group">Введите группу?</label>
          <input type="text" name="group" id="group" className="item" />
          <label htmlFor="stack">Какие языки программирования ты знаешь?</label>
          <input
            type="text"
            name="stack"
            id="stack"
            className="item"
            placeholder="C++, Python, JavaScript"
          />
          <div className="role-checkbox-group"></div>
          <fieldset>
            <legend>Какую роль ты можешь занимать в команде?</legend>
            <div>
              <input
                type="checkbox"
                name="backend"
                id="backend"
                className="role-checkbox"
              />
              <label htmlFor="backend">Backend</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="frontend"
                id="frontend"
                className="role-checkbox"
              />
              <label htmlFor="frontend">Frontend</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="design"
                id="design"
                className="role-checkbox"
              />
              <label htmlFor="design">Design</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="analyst"
                id="analyst"
                className="role-checkbox"
              />
              <label htmlFor="analyst">Analyst</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="others"
                id="others"
                className="role-checkbox"
              />
              <label htmlFor="others">Others</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Какие клубы от ITAM тебе были бы интересны?</legend>
            <div>
              <input
                type="checkbox"
                name="backend"
                id="backend"
                className="role-checkbox"
              />
              <label htmlFor="backend">Хакатон клуб</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="frontend"
                id="frontend"
                className="role-checkbox"
              />
              <label htmlFor="frontend">Дизайнеры DAMN</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="design"
                id="design"
                className="role-checkbox"
              />
              <label htmlFor="design">Gamedev club</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="analyst"
                id="analyst"
                className="role-checkbox"
              />
              <label htmlFor="analyst">AI Knowledge Club</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="others"
                id="others"
                className="role-checkbox"
              />
              <label htmlFor="others">Робототехника</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="others"
                id="others"
                className="role-checkbox"
              />
              <label htmlFor="others">Курсы от ITAM</label>
            </div>
          </fieldset>
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}
