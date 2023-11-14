//import { nanoid } from "nanoid";

import { Link } from "./Navigation.style";

const SubMenu = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li>
            <Link exact to={"/" + article.title}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
