import { useEffect, useRef, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { getArticles } from "../../services/serviceApi";
import DropdownMenu from "./DropdownMenu";
import { Nav, Link, MenuBtn, DropdownMenuBox } from "./Navigation.style";
import SubMenu from "./SubMenu";

const Navigation = () => {
  const [articles, setArticles] = useState(getArticles());

  //let ref = useRef();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuToggle = () => {
    setIsOpenMenu((prev) => !prev);
  };
  const [isDropdownVisibleFirst, setDropdownVisibleFirst] = useState(false);

  const handleMouseEnterFirst = () => {
    setDropdownVisibleFirst(true);
  };

  const handleMouseLeaveFirst = () => {
    setDropdownVisibleFirst(false);
  };
  const [isDropdownVisibleSecond, setDropdownVisibleSecond] = useState(false);
  const handleMouseEnterSecond = () => {
    setDropdownVisibleSecond(true);
  };

  const handleMouseLeaveSecond = () => {
    setDropdownVisibleSecond(false);
  };

  useEffect(() => {
    setArticles((prevState) => prevState);
    setIsOpenMenu((prevState) => prevState);
    setDropdownVisibleFirst((prevState) => prevState);
    setDropdownVisibleSecond((prevState) => prevState);
  }, [articles, isOpenMenu, isDropdownVisibleFirst, isDropdownVisibleSecond]);

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
          <DropdownMenuBox
            onMouseEnter={handleMouseEnterFirst}
            onMouseLeave={handleMouseLeaveFirst}
          >
            <Link to="/projects" onClick={menuToggle}>
              Investment Philosophy
            </Link>
            {isOpenMenu ? (
              <SubMenu data={articles} category="2" />
            ) : (
              isDropdownVisibleFirst && (
                <DropdownMenu data={articles} category="2" />
              )
            )}
          </DropdownMenuBox>
          <DropdownMenuBox
            // ref={ref}
            onMouseEnter={handleMouseEnterSecond}
            onMouseLeave={handleMouseLeaveSecond}
          >
            <Link to="/market" onClick={menuToggle}>
              Market
            </Link>
            {isOpenMenu ? (
              <SubMenu data={articles} category="1" />
            ) : (
              isDropdownVisibleSecond && (
                <DropdownMenu data={articles} category="1" />
              )
            )}
          </DropdownMenuBox>
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
