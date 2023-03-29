import styled from "styled-components";
import market from "../../assets/images/market-view.jpg";

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 2.5em;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 5px 5px rgba(0, 0, 255, 0.2);
`;

export const SingleImgDiv = styled.div`
  width: "100%";
  padding: 15% 5%;
  background-image: url(${market});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SingleContent = styled.div`
  padding: 2% 5%;
`;
export const ContentIntro = styled.div`
  text-align: center;
  color: ${(p) => p.theme.colors.white};
`;
export const IntroText = styled.p`
  text-shadow: 2px 2px rgba(0, 0, 255, 0.2);
  font-size: 1.5em;
`;

export const JustifyText = styled.div`
  text-align: justify;
`;
