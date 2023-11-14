//import articles from "../../services/article.json";
import News from "../../components/News/News";

// import PropTypes from "prop-types";
import {
  Wrapper,
  Flex,
  BoxCenter,
  SliderSection,
  SliderSubTitle,
  SliderText,
  BtnLink,
} from "./HomeView.style";
import Aside from "../../components/Aside/Aside";

const HomeView = ({ data }) => {
  // console.log("data in homeview", data);
  return (
    <>
      <Wrapper>
        <Flex>
          <SliderSection>
            <BoxCenter>
              <SliderSubTitle>Wealth Creation</SliderSubTitle>
              <SliderText>
                Ethical Value Investing for Long Term Capital Appreciation in Up
                and Down Markets
              </SliderText>

              <BtnLink href="#news" rel="noopener noreferrer">
                Learn more
              </BtnLink>
            </BoxCenter>
          </SliderSection>
        </Flex>
      </Wrapper>

      <News articles={data} />
      <Aside />
    </>
  );
};

export default HomeView;
