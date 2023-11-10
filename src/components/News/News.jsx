import { nanoid } from "nanoid";
import NewsListItems from "./NewsListItems";
import {
  BoxCenter,
  NewsListBox,
  BoxMessageEmpty,
  Section,
  Title,
} from "./News.style";

const News = ({ articles }) => {
  console.log("news articles:  ", articles);
  return (
    <Section id="news">
      <Title>News</Title>
      {articles.length > 0 ? (
        <NewsListBox>
          {articles.map((article) => (
            <NewsListItems item={article} key={article.id + nanoid(6)} />
          ))}
        </NewsListBox>
      ) : (
        <BoxMessageEmpty>
          <BoxCenter>News is empty</BoxCenter>
        </BoxMessageEmpty>
      )}
    </Section>
  );
};

export default News;
