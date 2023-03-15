import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

export const MenuBtn = styled.div`
  @media (min-width: 750px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 750px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: 60px;
    transition: opacity 250ms ${(p) => p.theme.transition};
    opacity: ${({ menuToggle }) => (menuToggle ? 1 : 0)};
    pointer-events: ${({ menuToggle }) => (menuToggle ? "painted" : "none")};
    background-color: ${(p) => p.theme.colors.white};
    text-align: center;
    border-top: 1px solid ${(p) => p.theme.colors.accent};
  }
  @media (min-width: 750px) {
    display: flex;
    align-items: center;
  }
`;

export const LinkResume = styled.a`
  ${commonLinkStyles}
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
