import propTypes from "prop-types";
// import { nanoid } from "nanoid";

import { getCategory } from "../../services/helpers";
import {
  DropdownMenuLi,
  DropdownMenuUl,
  DropdownLink,
} from "./DropdownMenu.style";
//import { Link } from "./Navigation.style";

const DropdownMenu = ({ data, category }) => {
  return (
    <DropdownMenuUl>
      {data
        .filter((article) => category === article.category_id)
        .map((article) => (
          <DropdownMenuLi>
            <DropdownLink exact to={getCategory(category) + article.title}>
              {article.title}
            </DropdownLink>
          </DropdownMenuLi>
        ))}
    </DropdownMenuUl>
  );
};

export default DropdownMenu;

DropdownMenu.propTypes = {
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
