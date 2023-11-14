import { BsHeartFill } from "react-icons/bs";
import {
  Heart,
  Link,
  Info,
  MainFooter,
  ImgFooter,
  FooterStart,
  FooterNav,
  FooterEnd,
} from "./Footer.style";
import { theme } from "../../services/theme";
import logo from "../../assets/images/logo.jpg";

const Footer = () => {
  return (
    <MainFooter>
      <ImgFooter src={logo} alt="Spartacus Partners Logo" />

      <FooterStart>
        <FooterNav>
          <ul>
            <li>
              <Link
                exact
                to="/"
                /*onClick={menuToggle}*/ rel="noopener noreferrer  nofollow"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                /*onClick={menuToggle}*/ rel="noopener noreferrer  nofollow"
              >
                Investment Philosophy
              </Link>
            </li>
          </ul>
        </FooterNav>
      </FooterStart>

      <FooterEnd>
        <Info>
          <span>&copy; 2023 . </span>
          <Link href="#" rel="noopener noreferrer  nofollow">
            by Spartacus Partners
          </Link>
        </Info>
        <Info>
          <span> Developed </span>
          <Heart
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              times: [0, 0.5, 1],
              loop: Infinity,
            }}
          >
            <BsHeartFill color={theme.colors.accent} />
          </Heart>
          <Link href="#" target="_blank" rel="noopener noreferrer  nofollow">
            by OGI
          </Link>
        </Info>
      </FooterEnd>
    </MainFooter>
  );
};

export default Footer;
