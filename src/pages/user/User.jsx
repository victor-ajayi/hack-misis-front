import Cookies from "js-cookie";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import "./User.css";

export default function User() {
  const id = Cookies.get("_id");
  return (
    <>
      <Navbar id />
      <div className="user-page">
        <Sidebar />
        <main className="user-container"></main>
      </div>
    </>
  );
}
