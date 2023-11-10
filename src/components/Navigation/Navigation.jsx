import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Nav, Link, MenuBtn } from "./Navigation.style";

const Navigation = () => {
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
        <ul>
          <li>
            <Link exact to="/" onClick={menuToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={menuToggle}>
              Investment Philosophy
            </Link>
          </li>
          <li>
            <Link to="/market" onClick={menuToggle}>
              Market
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={menuToggle}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={menuToggle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default Navigation;
