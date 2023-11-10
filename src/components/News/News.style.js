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
  -webkit-flex-direction: row;
  flex-direction: row;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(2n) {
    @media (min-width: 840px) {
      flex-wrap: wrap-reverse;
      -webkit-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
  }
`;

export const BoxCenter = styled.div`
  text-align: center;
`;
export const BoxImg = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 300px;
  width: 40%;
  @media (max-width: 840px) {
    width: 100%;
  }
`;

export const ImgListItem = styled.img`
  background-color: ${(p) => p.theme.colors.gray};
  display: block;
  height: 100%;
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
  justify-content: center;
  align-items: center;
  text-align: justify;
  width: 60%;
  @media (max-width: 840px) {
    width: 100%;
  }
  padding: 0;
  font-size: ${(p) => p.theme.fontSizes.s};
`;
export const LinkPostNews = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.white};
  padding: 5%;
  height: 100%;
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
