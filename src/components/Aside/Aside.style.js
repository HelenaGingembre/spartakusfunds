import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  color: ${(p) => p.theme.colors.black};
  @media (max-width: 769px) {
    flex-wrap: wrap;
  }
`;
export const Side = styled.aside`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  //padding: 0 1% 0 0;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const ImgSide = styled.img`
  background-size: cover;
`;
export const TextSide = styled.div`
  padding: 15px 0 0 0;
  text-align: justify;
`;
export const LinkSide = styled.a`
  display: inline-block;
  padding: 0 0 0 15px;
  color: ${(p) => p.theme.colors.accent};
  :hover {
    color: ${(p) => p.theme.colors.accentHoverLink};
    //text-decoration: underline;
  }
`;

export const Advertise = styled.div`
  width: 40%;
  padding: 30px 10px 10px;
  @media (max-width: 769px) {
    width: 100%;
  }
`;
export const BoxBlue = styled.div`
  background: rgba(218, 237, 255, 1);
  padding: 20px;
  border-radius: 5px;
  font-style: italic;
  &:after {
    content: " ";
    width: 0;
    height: 0;
    position: relative;
    bottom: -58px;
    left: 0;
    margin-left: -222px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 18px solid rgba(218, 237, 255, 1);
  }
`;
export const SubTitle = styled.h2`
  text-transform: uppercase;
`;
