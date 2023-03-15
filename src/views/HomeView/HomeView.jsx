// import { techSkills } from "./techSkills";
// import TechSkills from "../../components/TechSkills";
// import Contacts from "../../components/Contacts";
import photoSpartac from "../../assets/images/fixed-income.jpg";
// import PropTypes from "prop-types";
import { Wrapper, Flex, Title, Info, SubTitle, List } from "./HomeView.style";

function HomeView() {
  return (
    <>
      <Wrapper>
        <Flex>
          <Title>Hi there!</Title>
          <Info>/ My name's Company!</Info>
        </Flex>
        <Flex>
          <img
            src={photoSpartac}
            alt="Spartacusfunds"
            width="560"
            height="465"
          />
        </Flex>
      </Wrapper>
      <SubTitle>[ Tech Skills_ ]</SubTitle>
      <List>
        {/* {techSkills.map(({ id, label, icon }) => (
          <TechSkills key={id} label={label} icon={icon} />
        ))} */}
      </List>
      <SubTitle>[ Contacts_ ]</SubTitle>
      {/* <Contacts /> */}
    </>
  );
}

// HomeView.propTypes = {
//   techSkills: PropTypes.arrayOf(PropTypes.object),
// };

export default HomeView;
