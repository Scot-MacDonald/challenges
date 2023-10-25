import logo from "../img/logo.jpg";
import Img from "./Img";

export default function Logo() {
  return (
    <a href="#">
      <Img className="round-image" src={logo} alt="logo" />
    </a>
  );
}
