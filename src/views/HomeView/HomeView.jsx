import News from "../../components/News/News";
import Aside from "../../components/Aside/Aside";
import propTypes from "prop-types";

import {
  Wrapper,
  Flex,
  BoxCenter,
  SliderSection,
  SliderSubTitle,
  SliderText,
  BtnLink,
} from "./HomeView.style";

const HomeView = ({ data }) => {
  console.log("news data--->", data);
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

      <News data={data} />
      <Aside />
    </>
  );
};

export default HomeView;

HomeView.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string,
      date: propTypes.string,
      image: propTypes.string,
      category_id: propTypes.string,
      description: propTypes.string,
      title_block1_content1: propTypes.string,
      block1_content1: propTypes.string,
      title_block1_content2: propTypes.string,
      block1_content2: propTypes.string,
      title_block1_content3: propTypes.string,
      block1_content3: propTypes.string,
      title_block1_content4: propTypes.string,
      block1_content4: propTypes.string,
    })
  ),
};
