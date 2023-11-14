import {
  NewsListItem,
  BoxTitle,
  TitleListItem,
  BoxImg,
  PostContent,
  ImgListItem,
  LinkPostNews,
} from "./News.style";

const NewsListItems = ({ item, key }) => {
  const { image, title, description } = item;
  return (
    <NewsListItem key={key}>
      <BoxImg>
        <ImgListItem src={image} />
        <BoxTitle>
          <TitleListItem>{title}</TitleListItem>
        </BoxTitle>
      </BoxImg>

      <PostContent>
        <LinkPostNews
          href={`#` + title}
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
