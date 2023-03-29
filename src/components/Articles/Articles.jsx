import propTypes from "prop-types";
import logo from "../../assets/images/logo.jpg";

import {
  Item,
  Preview,
  Wrapper,
  Title,
  Info,
  Tech,
  TechItem,
  Link,
  Img,
  Content,
} from "./Articles.style";

function Articles({ data }) {
  const {
    id,
    title,
    date,
    image,
    category_id,
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
    <Item id={id}>
      <div class="logo-market">
        <img
          src={logo}
          alt="logo-market"
          class="center-img"
          style={{ width: "15%" }}
        />
      </div>
      <Title> {title} </Title>

      <div class="date">{date}</div>
      <p class="justify">{description}</p>
      <h3>{title_block1_content1}</h3>
      <div class="justify">{block1_content1}</div>
      <h3>{title_block1_content2}</h3>
      <div class="justify">{block1_content2}</div>
      <h3>{title_block1_content3}</h3>
      <div class="justify">{block1_content3}</div>
      <h3>{title_block1_content4}</h3>
      <div class="justify">{block1_content4}</div>
    </Item>
  );
}

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
