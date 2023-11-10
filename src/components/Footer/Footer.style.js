import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.wight};
  padding: 0;
  margin: 0;
`;
export const ImgFooter = styled.img`
  margin: 0 auto;
  width: 20%;
`;
export const FooterStart = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  background: ${(p) => p.theme.colors.background};
  padding: 10px 20px;
`;

export const Copy = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.black};
`;

export const Info = styled.div`
  display: flex;
  color: ${(p) => p.theme.colors.black};
  padding: 0 10px;
  align-items: center;
  text-align: center;
`;
export const Heart = styled(motion.div)`
  margin: 0 15px;
`;

const commonLinkStyles = styled.a`
  display: block;
  font-weight: 500;
  font-size: 18px;
  color: ${(p) => p.theme.colors.text.primary};
  transition: color 250ms ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const Link = styled(NavLink)`
  ${commonLinkStyles}
  &.active {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const FooterNav = styled.nav`
  color: ${(p) => p.theme.colors.accent};
  ul {
    display: flex;
    flex-wrap: nowrap;
  }
  ul li {
    padding: 0 10px;
  }
  ${Link} {
    color: ${(p) => p.theme.colors.accent};
    &:hover,
    &:focus {
      color: ${(p) => p.theme.colors.accentHoverLink};
    }
  }
`;
export const FooterEnd = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${(p) => p.theme.colors.bg_footer};
  padding: 20px;
  @media (max-width: 769px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
