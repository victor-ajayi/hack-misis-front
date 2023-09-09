import Navbar from "../../components/Navbar";
import "../../components/styles/Login.css";
export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="registration-cssave">
        <form>
          <h3 className="text-center">Вход в аккаунт</h3>
          <div className="form-group">
            <input
              className="item"
              type="text"
              name="email"
              maxlength="15"
              minlength="4"
              pattern="^[a-zA-Z0-9_.-]*$"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="item"
              type="password"
              name="Пароль"
              minlength="6"
              id="password"
              placeholder="Пароль"
              required
            />
          </div>

          <div className="form-group">
            <button className="login" type="submit">
              Войти
            </button>
            <button className="create-account" type="submit">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
