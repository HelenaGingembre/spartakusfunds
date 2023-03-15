import { BsHeartFill } from "react-icons/bs";
import { Wrapper, Copy, Heart } from "./Footer.style";

function Footer() {
  return (
    <Wrapper>
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
          <BsHeartFill color={p.theme.colors.accent} />
        </Heart>
        by Olena Izotova.
      </Copy>
    </Wrapper>
  );
}

export default Footer;
