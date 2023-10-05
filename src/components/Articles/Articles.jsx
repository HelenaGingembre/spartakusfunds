import propTypes from "prop-types";
import logo from "../../assets/images/logo.jpg";

import { Item, Title, Img, Content } from "./Articles.style";

const Articles = ({ data, key }) => {
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
    <Item key={id}>
      <div class="logo-market">
        <img
          src={logo}
          alt="logo-market"
          className="center-img"
          style={{ width: "15%" }}
        />
      </div>
      <Img src={image} alt={title} className="center-img"></Img>
      <Title> {title} </Title>

      <div className="date">{date}</div>
      <Content>
        <p className="justify">{description}</p>
        <h3>{title_block1_content1}</h3>
        <div className="justify">{block1_content1}</div>
        <h3>{title_block1_content2}</h3>
        <div className="justify">{block1_content2}</div>
        <h3>{title_block1_content3}</h3>
        <div className="justify">{block1_content3}</div>
        <h3>{title_block1_content4}</h3>
        <div className="justify">{block1_content4}</div>
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
