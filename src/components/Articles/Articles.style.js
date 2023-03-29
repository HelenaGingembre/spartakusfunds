import styled from "styled-components";

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const Preview = styled.div`
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadows};
  border-radius: 4px;
`;

export const Img = styled.img`
  display: block;
`;

export const Wrapper = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.text.primary};
  color: ${(p) => p.theme.colors.white};
`;

export const Content = styled.div`
  padding: 30px 10px;
`;

export const Info = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${(p) => p.theme.colors.text.secondary};
`;

export const Tech = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TechItem = styled.li`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid ${(p) => p.theme.colors.text.secondary};
  border-radius: 8px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Link = styled.a`
  color: ${(p) => p.theme.colors.text.secondary};
  transition: color 250ms ${(p) => p.theme.transition};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
