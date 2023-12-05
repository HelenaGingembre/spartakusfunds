import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 30px;
  color: ${(p) => p.theme.colors.black};
`;
export const Title = styled.h2`
  margin: 40px 0 30px;
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.mll};
  line-height: 1.14;
  text-transform: uppercase;
`;
export const NewsListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const NewsListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  -webkit-flex-direction: column;
  flex-direction: column;
  margin: 0 5px;
  border-radius: 5px;
  box-shadow: 10px 2px 10px 0px rgba(20, 104, 168, 0.4);
  width: 30%;

  @media (max-width: 840px) {
    width: 100%;
    margin: 0 0 30px 0;
  }
`;

export const BoxCenter = styled.div`
  text-align: center;
`;
export const BoxImg = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ImgListItem = styled.img`
  background-color: ${(p) => p.theme.colors.gray};
  display: block;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const BoxTitle = styled.div`
  background: ${(p) => p.theme.colors.gray_transparent};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 5%;
  border-radius: 5px;
`;
export const TitleListItem = styled.h3`
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.14;
  text-transform: uppercase;
`;

export const PostContent = styled.div`
  display: flex;
  height: 250px;
  padding: 0;
  justify-content: center;
  text-align: flex-start;
  font-size: ${(p) => p.theme.fontSizes.s};
  @media only screen and (min-width: 841px) and (max-width: 1140px) {
    height: 350px;
  }
  @media only screen and (min-width: 480px) and (max-width: 840px) {
    height: 200px;
  }
`;
export const LinkPostNews = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  background-color: ${(p) => p.theme.colors.blue};
  color: ${(p) => p.theme.colors.accent};
  padding: 30px 20px 30px;
  width: 100%;
  :hover {
    background-color: ${(p) => p.theme.colors.accentHover};
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const BoxMessageEmpty = styled.div`
  text-align: center;
  padding: 20px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
`;
