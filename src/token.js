import Cookies from "js-cookie";

export default function getToken(id) {
  const token = Cookies.set("_id", id);
}
