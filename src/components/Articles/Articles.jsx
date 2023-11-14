import propTypes from "prop-types";
import logo from "../../assets/images/logo.jpg";

import {
  Item,
  LogoContainer,
  Title,
  Img,
  Content,
  TimeBox,
  SubTitle,
  SubText,
} from "./Articles.style";

const Articles = ({ data, key }) => {
  const {
    id,
    title,
    date,
    image,
    // category_id,
    description,
    title_block1_content1,
    block1_content1,
    title_block1_content2,
    block1_content2,
    title_block1_content3,
    block1_content3,
    title_block1_content4,
    block1_content4,
  } = data;

  return (
    <Item key={key} id={title}>
      <LogoContainer>
        <Img src={logo} alt="Logo spartacus" />
      </LogoContainer>
      {/* <Img src={image} alt={title}></Img> */}
      <Title> {title} </Title>

      <TimeBox>{date}</TimeBox>
      <Content>
        <SubText>{description}</SubText>
        <SubTitle>{title_block1_content1}</SubTitle>
        <SubText>{block1_content1}</SubText>
        <SubTitle>{title_block1_content2}</SubTitle>
        <SubText>{block1_content2}</SubText>
        <SubTitle>{title_block1_content3}</SubTitle>
        <SubText>{block1_content3}</SubText>
        <SubTitle>{title_block1_content4}</SubTitle>
        <SubText>{block1_content4}</SubText>
      </Content>
    </Item>
  );
};

Articles.propTypes = {
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

export default Articles;
