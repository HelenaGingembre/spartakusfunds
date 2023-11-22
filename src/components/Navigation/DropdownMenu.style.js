import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { commonLinkStyles } from "./Navigation.style";

export const DropdownMenuUl = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  top: 80px;
  left: 0px;
  width: 250px;
  padding: unset;
  margin: unset;

  background-color: ${(p) => p.theme.colors.bg_header};
  box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.05);
  transition: all linear 0.3s;
`;

export const DropdownMenuLi = styled.li`
  padding: 14px;
  transition: all linear 0.3s;
  &li:hover,
  &:focus,
  &.active {
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.bg_header};
    cursor: pointer;
  }
`;

export const DropdownLink = styled(NavLink)`
  ${commonLinkStyles}
  align-items: center;
  &.active {
    color: ${(p) => p.theme.colors.accent};
  }
  @media (max-width: 749px) {
    padding: 10px 0px;
  }
  @media (min-width: 750px) {
    padding: 10px 0px;
    display: flex;
  }
`;
