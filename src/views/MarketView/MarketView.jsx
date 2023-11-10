import { nanoid } from "nanoid";
import {
  Title,
  SingleImgDiv,
  ContentIntro,
  SingleContent,
  JustifyText,
  IntroText,
} from "./MarketView.style";

import Articles from "../../components/Articles/Articles";

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
