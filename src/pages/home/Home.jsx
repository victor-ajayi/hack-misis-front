import { useState } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import image1 from "../../img/image1.png";
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
import image4 from "../../img/image4.png";
import image5 from "../../img/image5.png";
import image6 from "../../img/image6.png";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();

  function handleClick() {
    navigate("/login");
  }

  let [ClubCartOpen, setCartOpen] = useState("false");
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <div className="header">
          <h1>
            ITAM.<span id="clubs">clubs</span> — единая платформа для
            организации <br />
            студенческой проектной деятельности
          </h1>
        </div>

        {!isAuthenticated() && (
          <button className="register" onClick={handleClick}>
            Присоединяйся к нам!
          </button>
        )}

        <section className="clubs-container">
          <h3>Познакомьтесь с сообществами</h3>
          <h5>Выбирай, что нравится!</h5>
          {ClubCartOpen == "hack" && (
            <div className="modal" onClick={() => setCartOpen("false")}>
              <div className="rectangle">
                <img src={image6} className="ClubPhoto" />
                <p className="clubName">Хакатон клуб</p>
                <p className="clubInfo">
                  Участники клуба активно принимают участие в хакатонах.
                  Командам предоставляется экспертная поддержка, технической
                  инфраструктурой.Цель сообщества — развитие навыков и
                  компетенций в решении реальных задач бизнеса, которые имеют
                  значительный потенциал для прикладного применения
                  <br />
                  <br />
                  <br />
                  Контакты:  <a href="https://t.me/+WQeYWDOPnvs5yhhY" className="link_contacts">Telegram-чат </a>
                </p>
              </div>
            </div>
          )}
          {ClubCartOpen == "design" && (
            <div className="modal" onClick={() => setCartOpen("false")}>
              <div className="rectangle">
                <img src={image1} className="ClubPhoto" />
                <p className="clubName">Design at MISIS Now(Дизайн клуб)</p>
                <p className="clubInfo">
                  DAMN — это не просто клуб, это школа и дизайн-студия, в
                  которой каждый студент может получить теоретические и
                  практические навыки. Участники движения хакатонят и
                  разрабатывают коммерческие продукты.
                  <br />
                  <br />
                  <br />
                  Контакты: <a href="https://t.me/+zTBGzdqNc4xlZWUy" className="link_contacts">Telegram-чат </a>
                </p>
              </div>
            </div>
          )}
          {ClubCartOpen == "gamedev" && (
            <div className="modal" onClick={() => setCartOpen("false")}>
              <div className="rectangle">
                <img src={image2} className="ClubPhoto gamedev" />
                <p className="clubName">Gamedev club</p>
                <p className="clubInfo">
                  В клубе игровых разработчиков студенты совместно изучают
                  особенности игровой индустрии, учаться работать с различными
                  технологиями для разработки игри участвуют в соревнованиях
                  игровых разработчиков GameJam.
                  <br />
                  <br />
                  <br />
                  Контакты:  <a href="https://t.me/+N7viqkb05zVlZjJi" className="link_contacts">Telegram-чат </a>
                </p>
              </div>
            </div>
          )}
          {ClubCartOpen == "robot" && (
            <div className="modal" onClick={() => setCartOpen("false")}>
              <div className="rectangle">
                <img src={image4} className="ClubPhoto " id="robot" />
                <p className="clubName">Клуб Робототехники</p>
                <p className="clubInfo">
                  Клуб робототехников, работающих с передовыми технологиямив
                  сфере проектирования и программирования роботов.
                  <br />
                  <br />
                  <br />
                  Контакты: <a href="https://t.me/+qv-J493b9lFmYmQy" className="link_contacts">Telegram-чат </a>
                </p>
              </div>
            </div>
          )}
          {ClubCartOpen == "ml" && (
            <div className="modal" onClick={() => setCartOpen("false")}>
              <div className="rectangle">
                <img src={image5} className="ClubPhoto" id="ml" />
                <p className="clubName">AI Knowledge Club</p>
                <p className="clubInfo">
                  Прогрессивное молодое сообщество студентов ВУЗа НИТУ МИСИС,
                  где исследуют и создают модели нейросетей, обсуждают вопросы
                  машинного обучения, обмениваются интересными наборами данных и
                  организуют свои kaggle-like соревнования
                  <br />
                  <br />
                  <br />
                  Контакты:  <a href="https://t.me/aiknowledgeclub" className="link_contacts">Telegram-чат </a>
                </p>
              </div>
            </div>
          )}
          {ClubCartOpen == "courses" && (
            <div className="modal" onClick={() => setCartOpen("false")}>
              <div className="rectangle">
                <img src={image3} className="ClubPhoto" id="courses" />
                <p className="clubName">Курсы от ITAM</p>
                <p className="clubInfo">
                  Курсы по языкам программирования. Анонсы можно увидеть в
                  telegram канал ниже.
                  <br />
                  <br />
                  <br />
                  Контакты: <a href="https://t.me/itatmisis" className="link_contacts">Telegram-чат </a>
                </p>
              </div>
            </div>
          )}
          <div className="club-group">
            <div className="club" onClick={() => setCartOpen("hack")}>
              <p className="club--header">Хакатон клуб</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club" onClick={() => setCartOpen("design")}>
              <p className="club--header">Дизайнеры DAMN</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club" onClick={() => setCartOpen("gamedev")}>
              <p className="club--header">Gamedev club</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club" onClick={() => setCartOpen("ml")}>
              <p className="club--header">AI Knowledge Club</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club" onClick={() => setCartOpen("robot")}>
              <p className="club--header">Робототехника</p>
              <p className="club--subheader"></p>
            </div>
            <div className="club" onClick={() => setCartOpen("courses")}>
              <p className="club--header">Курсы от ITAM</p>
              <p className="club--subheader"></p>
            </div>
          </div>
        </section>
      </main>
      <br/>  <br/>  <br/>  <br/>
    </div>
  );
}
