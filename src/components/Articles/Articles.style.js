import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.jpg";

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
    &::after {
      content: url(${logo});
      font-size: 150%;
    }
  }
`;

export const LinkPost = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  background-color: transparent;
  color: ${(p) => p.theme.colors.white};

  height: 100%;
  width: 100%;
  :hover,
  :focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const Title = styled.h2`
  width: 100%;
  display: inline-block;
  padding: 10px;
  font-weight: 700;
  font-size: 1.2em;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.bg_black};
  color: ${(p) => p.theme.colors.white};
`;
export const TimeBox = styled.div`
  color: ${(p) => p.theme.colors.accent};
  padding: 20px;
`;
export const SubTitle = styled.h3`
  padding: 20px;
`;
export const SubText = styled.p`
  text-align: justify;
  &::first-letter {
    color: ${(p) => p.theme.colors.accent};
    font-size: 200%;
  }
`;
export const Content = styled.div`
  padding: 15px 30px;
`;
