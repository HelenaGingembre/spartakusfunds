import articles from "../../services/article.json";
import News from "../../components/News/News";
// import TechSkills from "../../components/TechSkills";
// import Contacts from "../../components/Contacts";
//import photoSpartac from "../../assets/images/fixed-income.jpg";
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

const HomeView = () => {
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

              {/* <button class="btn"> */}
              <BtnLink href="#news" rel="noopener noreferrer">
                Learn more
              </BtnLink>
              {/* </button> */}
            </BoxCenter>
          </SliderSection>
        </Flex>
      </Wrapper>

      <News articles={articles} />
      <Aside />
    </>
  );
};

// <SubTitle>[ Tech Skills_ ]</SubTitle>
//     <List>
//       {/* {techSkills.map(({ id, label, icon }) => (
//         <TechSkills key={id} label={label} icon={icon} />
//       ))} */}
//    </List>
//   <SubTitle>[ Contacts_ ]</SubTitle>
//     {/* <Contacts /> */}
// HomeView.propTypes = {
//   techSkills: PropTypes.arrayOf(PropTypes.object),
// };

export default HomeView;
