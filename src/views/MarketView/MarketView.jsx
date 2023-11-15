import { nanoid } from "nanoid";
import propTypes from "prop-types";
import Articles from "../../components/Articles/Articles";

import {
  Title,
  SingleImgDiv,
  ContentIntro,
  SingleContent,
  JustifyText,
  IntroText,
} from "./MarketView.style";

const MarketView = ({ data }) => {
  return (
    <section>
      <SingleImgDiv>
        <ContentIntro>
          <Title>Market Views</Title>
          <IntroText>Our View on Current Markets</IntroText>
        </ContentIntro>
      </SingleImgDiv>
      <SingleContent>
        <JustifyText>
          On this page, we will share our main market views.
          <br />
          This page will be updated, as markets dictate.
          <br />
          Do not hesitate to get in touch to share with us your views/comments.
        </JustifyText>

        <ul>
          {data.length > 0 ? (
            data
              .filter((item) => item.category_id === "1")
              .map((item) => <Articles key={item.id + nanoid(6)} data={item} />)
          ) : (
            <h4>There are no articles yet</h4>
          )}
        </ul>
      </SingleContent>
    </section>
  );
};
export default MarketView;

MarketView.propTypes = {
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
