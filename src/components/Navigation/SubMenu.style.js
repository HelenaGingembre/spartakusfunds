import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { commonLinkStyles } from "./Navigation.style";

export const SubMenuUl = styled.ul`
  display: flex;
  visibility: visible;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  transition: all linear 0.3s;
  align-items: stretch;
  //opacity: ${({ menuToggle }) => (menuToggle ? 1 : 0)};
  display: ${({ menuToggle }) => (menuToggle ? "none" : "flex")};
  @media (min-width: 749px) {
    display: none;
    visibility: hidden;
  }
`;

export const SubMenuLi = styled.li`
  &li:hover,
  &:focus,
  &.active {
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.bg_header};
    cursor: pointer;
  }
`;

export const SubMenuLink = styled(NavLink)`
  ${commonLinkStyles}
  font-size: 14px;
  padding: 10px 0px;
`;
