import Navigation from "../Navigation";
import { Header } from "./AppBar.style";
import logo from "../../assets/images/logo.jpg";

const Appbar = () => {
  return (
    <Header>
      <div>
        Spartacus <span>Partners</span>
      </div>
      <Navigation />
    </Header>
  );
};

export default Appbar;
