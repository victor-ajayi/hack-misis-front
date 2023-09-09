import Navbar from "../../components/Navbar";
export default function Registration() {
    
    return( <div>
         <Navbar />
         <div className="questions">

       
         <form className="question">
  <label for="name">Введите Вашу фамилию<br/> </label>
  <input type="text" id="name" placeholder="Иванов"/>
</form>
<form className="question">
  <label for="name">Введите Ваше имя<br/>  </label>
  <input type="text" id="name" placeholder="Иван"/>
</form>
<form className="question">
  <label for="name">Введите Ваш email<br/> </label>
  <input type="text" id="name" placeholder="Example@mail.ru"/>
</form>
<form className="question">
  <label for="name">Введите Вашу академическую группу<br/> </label>
  <input type="text" id="name" placeholder="БПМ-21-3"/>
</form>
<form className="question">
  <label for="name">gt</label>
  <input type="text" id="name" placeholder="БПМ-21-3"/>
</form>
</div>
    </div>)
  }
  