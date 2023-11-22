import propTypes from "prop-types";

import { getCategory } from "../../services/helpers";
import { SubMenuLi, SubMenuUl, SubMenuLink } from "./SubMenu.style";

const SubMenu = ({ data, category }) => {
  // const res = data.filter((article) => category === article.category_id);

  return (
    <SubMenuUl>
      {data
        .filter((article) => category === article.category_id)
        .map((article) => (
          <SubMenuLi>
            <SubMenuLink exact to={getCategory(category) + article.title}>
              {article.title}
            </SubMenuLink>
          </SubMenuLi>
        ))}
    </SubMenuUl>
  );
};

export default SubMenu;

SubMenu.propTypes = {
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
  category: propTypes.string.isRequired,
};
