import Cookies from "js-cookie";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { createUser } from "../../utils";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const signIn = useSignIn();
  const navigate = useNavigate();

  let data;
  async function handleSubmit() {
    try {
      data = await createUser(formData);
      console.log(data);
      Cookies.set("_id", data.id);
      if (data.id) {
        navigate("/profile", { replace: true });
      }
    } catch (e) {
      console.error(e);
    }
  }

  // if (
  //   signIn({
  //     token: data?.access_token,
  //     tokenType: "Bearer",
  //     authState: data?.id,
  //     expiresIn: 30,
  //   })
  // ) {
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
        <form onSubmit={(e) => e.preventDefault()}>
          <Link to="/">
            <span className="itam">ITAM.</span>clubs
          </Link>
          <p className="register-subheader">Скорее присоединяйся к нам!</p>
          <div className="form-group">
            <input
              className="item"
              type="text"
              name="login"
              id="login"
              onChange={handleChange}
              value={formData.login}
              placeholder="Логин"
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

          <span>
            Есть аккаунт?{" "}
            <Link to="/login" style={{ color: "#2b953d" }}>
              Войти
            </Link>
          </span>
          <div className="form-group">
            <button className="login" type="submit" onClick={handleSubmit}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
