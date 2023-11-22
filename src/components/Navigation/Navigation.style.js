import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const commonLinkStyles = `
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
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    position: fixed;
    left: 0;
    top: 80px;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    //padding: 15px 0px;
    transition: opacity 250ms ${(p) => p.theme.transition};
    opacity: ${({ menuToggle }) => (menuToggle ? 1 : 0)};
    pointer-events: ${({ menuToggle }) => (menuToggle ? "painted" : "none")};
    background-color: ${(p) => p.theme.colors.bg_header};
    color: ${(p) => p.theme.colors.white};
    border-top: 1px solid ${(p) => p.theme.colors.accent};
  }
  @media (min-width: 749px) {
    height: 80px;
    display: flex;
    align-items: center;
    ul {
      display: flex;
      padding-left: 10px;
    }
  }
`;

export const LinkResume = styled.a`
  ${commonLinkStyles}
`;

export const Link = styled(NavLink)`
  ${commonLinkStyles}
  align-items: center;
  &.active {
    color: ${(p) => p.theme.colors.accent};
  }
  @media (max-width: 749px) {
    padding: 15px 0px;
  }
  @media (min-width: 750px) {
    height: 80px;
    margin-right: 25px;
    display: flex;
  }
`;

export const DropdownMenuBox = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
