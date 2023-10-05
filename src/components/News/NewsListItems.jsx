import {
  NewsListItem,
  TitleListItem,
  BoxImg,
  PostContent,
  ImgListItem,
  LinkPostNews,
} from "./News.style";

const NewsListItems = ({ item }) => {
  return (
    <NewsListItem id={item.id}>
      <BoxImg>
        <ImgListItem src={item.image} />
        <TitleListItem>{item.title}</TitleListItem>
      </BoxImg>

      <PostContent>
        <LinkPostNews href="#" target="_blank" rel="noopener noreferrer">
          {item.description}
        </LinkPostNews>
      </PostContent>
    </NewsListItem>
  );
};

export default NewsListItems;
