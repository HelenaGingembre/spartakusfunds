import styled from "styled-components";

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const LogoContainer = styled.div`
  overflow: hidden;
  width: 15%;
  margin: 0 auto;
  @media (max-width: 750px) {
    width: 30%;
  }
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto;
`;

export const LinkPost = styled.a`
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
`;
export const Content = styled.div`
  padding: 15px 30px;
`;
