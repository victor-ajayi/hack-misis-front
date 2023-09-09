import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../components/styles/Login.css";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const signIn = useSignIn();
  const navigate = useNavigate();

  // try {
  //   data = loginUser(formData);
  // } catch (e) {
  //   console.error(e);
  // }

  // if (signIn()) {
  //   navigate("/profile");
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

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
              id="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Почта"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="item"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
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
