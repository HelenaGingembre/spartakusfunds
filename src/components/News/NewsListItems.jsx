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
  //console.log("item----->", item);
  //console.log("key----->", key);
  // const getCategory = (itemCategory) => {
  //   const result = itemCategory === "2" ? "/projects/" : "/market/";

  //   return result;
  // };

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
          href={getCategory(category_id) + title.toLowerCase()}
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
