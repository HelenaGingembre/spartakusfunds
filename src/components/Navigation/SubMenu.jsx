//import { nanoid } from "nanoid";

import { getCategory } from "../../services/helpers";
import { Link } from "./Navigation.style";

const SubMenu = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((article) => (
          <li>
            <Link exact to={getCategory(article.category_id) + article.title}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
