import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Nav, Link, MenuBtn } from "./Navigation.style";

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuToggle = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <MenuBtn>
        {isOpenMenu ? (
          <MdClose size="40" onClick={menuToggle} />
        ) : (
          <MdMenu size="40" onClick={menuToggle} />
        )}
      </MenuBtn>
      <Nav menuToggle={isOpenMenu}>
        <Link exact to="/" onClick={menuToggle}>
          Home
        </Link>

        <Link to="/projects" onClick={menuToggle}>
          Investment Philosophy
        </Link>
        <Link to="/market" onClick={menuToggle}>
          Market
        </Link>
        <Link to="/about" onClick={menuToggle}>
          About Us
        </Link>
        <Link to="/contact" onClick={menuToggle}>
          Contact
        </Link>
      </Nav>
    </>
  );
}

export default Navigation;
