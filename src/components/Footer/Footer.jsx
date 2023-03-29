import { BsHeartFill } from "react-icons/bs";
import { Wrapper, Copy, Heart, Link, Info } from "./Footer.style";
import { theme } from "../../services/theme";

function Footer() {
  return (
    /*<Wrapper>
      <Copy>
        © 2023 | Developed
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
        by Olena Izotova.
      </Copy>
    </Wrapper>*/
    <footer class="main-footer">
      <a href="#">
        <img class="img-footer" src="logo.jpg" alt="Spartacus Partners" />
      </a>
      <div class="footer-start">
        <nav class="footernav">
          <ul>
            <li>
              <Link exact to="/" /*onClick={menuToggle}*/>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" /*onClick={menuToggle}*/>
                Investment Philosophy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="footer-end">
        <Info>
          <span>&copy; 2023 . </span>
          <a href="#"> by Spartacus Partners</a>
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
          <a href="#" target="_blank">
            by OGI
          </a>
        </Info>
      </div>
    </footer>
  );
}

export default Footer;
