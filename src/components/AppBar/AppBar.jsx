import Navigation from "../Navigation";
import { Header } from "./AppBar.style";

const Appbar = () => {
  return (
    <Header>
      <div>
        <a href="/">
          Spartacus <span>Partners</span>
        </a>
      </div>
      <Navigation />
    </Header>
  );
};

export default Appbar;
