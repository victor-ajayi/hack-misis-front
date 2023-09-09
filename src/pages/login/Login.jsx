import Navbar from "../../components/Navbar";
import "../../components/styles/Login.css"
export default function Login() {

  return (
    <div>
      <Navbar />
      <div class="registration-cssave">
    <form>
        <h3 class="text-center">Вход в аккаунт</h3>
        <div class="form-group">
            <input class="form-control item" type="text" name="email" maxlength="15" minlength="4"
             pattern="^[a-zA-Z0-9_.-]*$" id="email" placeholder="Email" 
            required/>
        </div>
        <div class="form-group">
            <input class="form-control item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль" required/>
        </div>
        
        <div class="form-group">
            <button class="btn btn-primary btn-block create-account" type="submit">Войти</button>
            <button class="btn btn-primary btn-block create-account" type="submit">зарегистрироваться</button>
        </div>
    </form>
</div>
    </div>
  );
}
