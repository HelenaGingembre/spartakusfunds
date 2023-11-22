import { getCategory } from "../../services/helpers";
import {
  NewsListItem,
  BoxTitle,
  TitleListItem,
  BoxImg,
  PostContent,
  ImgListItem,
  LinkPostNews,
} from "./News.style";

const NewsListItems = ({ item }) => {
  const { image, title, description, category_id } = item;

  return (
    <NewsListItem>
      <BoxImg>
        <ImgListItem src={image} />
        <BoxTitle>
          <TitleListItem>{title}</TitleListItem>
        </BoxTitle>
      </BoxImg>

      <PostContent>
        <LinkPostNews
          to={getCategory(category_id) + title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </LinkPostNews>
      </PostContent>
    </NewsListItem>
  );
};

export default NewsListItems;
