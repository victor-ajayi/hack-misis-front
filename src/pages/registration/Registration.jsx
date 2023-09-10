import Navbar from "../../components/Navbar";
import "./Registration.css";
export default function Registration() {
  return (
    <div>
      <Navbar />
      <h1 className="reg_head">Регистрация</h1>
      <div className="questions">
        <form className="question">
          <label htmlFor="name">
            <br />
            Твоя фамилия?
            <br />
            <br />
            <br />{" "}
          </label>
          <input type="text" className="name" placeholder="Иванов" />
        </form>
        <form className="question">
          <label htmlFor="name">
            <br />
            Твоё имя?
            <br /> <br />
            <br />{" "}
          </label>
          <input type="text" className="name" placeholder="Иван" />
        </form>
        <form className="question">
          <label htmlFor="name">
            <br />
            Введи свой email
            <br />
            <br />
            <br />{" "}
          </label>
          <input type="text" className="name" placeholder="Example@mail.ru" />
        </form>
        <form className="question">
          <label htmlFor="name">
            <br />
            Введи свою академическую группу
            <br />
            <br />
            <br />{" "}
          </label>
          <input type="text" className="name" placeholder="БПМ-21-3" />
        </form>
        <form className="question">
          <label htmlFor="name">
            <br />
            Какие языки программирования <br />
            ты знаешь?
            <br />
            <br />
            <br />
          </label>
          <input type="text" className="name" placeholder="С++,Python,C" />
        </form>
        <form className="question">
          <label htmlFor="name">
            <br />
            Какую роль ты можешь <br /> занимать в команде?
            <br />
            <br />
          </label>
          <div className="checkboxes">
            <input type="checkbox" name="transport" /> Фронтэнд
            <br />
            <br />
            <input type="checkbox" name="transport" /> ML/DS/AI
            <br />
            <br />
            <input type="checkbox" name="transport" /> Бэкенд
            <br />
            <br />
            <input type="checkbox" name="transport" /> Дизайнер
            <br />
            <br />
            <input type="checkbox" name="transport" /> Аналитик
            <br />
            <br />
            <input type="checkbox" name="transport" /> Другое
            <br />
            <br />
            <br />
          </div>
        </form>

        <form className="question">
          <label htmlFor="name">
            <br />
            Какие клубы от ITAM тебе <br />
            были бы интересны?
            <br />
            <br />
          </label>
          <div className="checkboxes">
            <input type="checkbox" name="transport" /> Хакатон клуб
            <br />
            <br />
            <input type="checkbox" name="transport" /> Дизайнеры DAMN
            <br />
            <br />
            <input type="checkbox" name="transport" /> Gamedev club
            <br />
            <br />
            <input type="checkbox" name="transport" /> AI Knowledge Club
            <br />
            <br />
            <input type="checkbox" name="transport" /> Робототехника
            <br />
            <br />
            <input type="checkbox" name="transport" /> Курсы от ITAM
            <br />
            <br />
            <br />
          </div>
        </form>
        <form className="question">
          <label htmlFor="name">
            <br />
            Что еще ты хочешь рассказать
            <br /> о себе?
            <br />
            <br />
          </label>
          <input type="text" className="name" />
        </form>
        <button
          className="reg_button"
          onClick={() => (window.location.href = "/")}
          type="submit"
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}
