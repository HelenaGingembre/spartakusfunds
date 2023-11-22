import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { nanoid } from "nanoid";
import NewsListItems from "./NewsListItems";
import {
  BoxCenter,
  NewsListBox,
  BoxMessageEmpty,
  Section,
  Title,
} from "./News.style";

const News = ({ data }) => {
  const [articles, setArticles] = useState(data);

  useEffect(() => {
    setArticles((prevState) => prevState);
  }, [articles]);

  return (
    <Section id="news">
      <Title>News</Title>
      {articles.length > 0 ? (
        <NewsListBox>
          {articles.map((article) => (
            <NewsListItems item={article} key={article.id + nanoid(9)} />
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

News.propTypes = {
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
