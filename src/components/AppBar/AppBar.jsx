import Navigation from "../Navigation";
import { Header } from "./AppBar.style";
import logo from "../../assets/images/logo.jpg";

export default function Appbar() {
  return (
    <Header>
      {/* <a href="/" aria-label="Logo">
        <img src={logo} alt="Logo" width="40" height="40" />
      </a> */}
      <div>
        Spartacus <span>Partners</span>
      </div>
      <Navigation />
    </Header>
  );
}
