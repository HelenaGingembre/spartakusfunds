import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.footer`
  padding: 20px 0;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.background};
`;

export const Copy = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.black};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.black};
`;
export const Heart = styled(motion.div)`
  margin: 0 15px;
`;

const commonLinkStyles = `
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
  @media (max-width: 749px) {
    margin-bottom: 30px;
  }
  @media (min-width: 750px) {
    margin-right: 55px;
  }
  @media (min-width: 900px) {
    margin-right: 85px;
  }
`;
