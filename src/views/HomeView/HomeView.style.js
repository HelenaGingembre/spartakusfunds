import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  margin-bottom: 0px;

  @media (max-width: 840px) {
    text-align: center;
  }
`;

export const Flex = styled.div`
  flex: 1 1 0%;
`;
export const SliderSection = styled.div`
  background-image: url("./assets/images/equity.jpg");
  background-color: ${(p) => p.theme.colors.background};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  color: ${(p) => p.theme.colors.white};

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-animation: slide 10s infinite;
  animation: slide 10s infinite;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.xl};
  line-height: 1.4;
  letter-spacing: 0.03em;
  @media (max-width: 840px) {
    font-size: 35px;
  }
`;

export const Info = styled.p`
  font-size: 40px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.accent};
  @media (max-width: 840px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.14;
  text-transform: uppercase;
`;

export const BoxCenter = styled.div`
  text-align: center;
  padding: 5%;
`;
export const SliderSubTitle = styled.h2`
  font-size: 3em;
  text-shadow: 0px 1px 3px #0b2e13;
  margin-bottom: 30px;
`;
export const SliderText = styled.p`
  font-size: 1.1em;
  text-shadow: 0px 1px 3px #0b2e13;
  margin-bottom: 30px;
`;

export const BtnLink = styled.a`
  display: inline-flex;
  -webkit-box-shadow: none;
  box-shadow: none;

  padding: 9px 20px;
  text-transform: uppercase;

  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.accent};
  cursor: pointer;

  :hover {
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.accent};
  }
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    color 250ms ease-in-out;
`;
