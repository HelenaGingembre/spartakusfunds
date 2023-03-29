import {
  Title,
  SingleImgDiv,
  ContentIntro,
  SingleContent,
  JustifyText,
  IntroText,
} from "./MarketView.style";
import data from "../../services/article.json";
import Articles from "../../components/Articles/Articles";

export function MarketView() {
  return (
    <section>
      <SingleImgDiv class="single-img">
        <ContentIntro class="content-intro center">
          <Title class="top">Market Views</Title>
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

        <div class="content-tab">
          <ul>
            {data
              .filter((item) => item.category_id === "1")
              .map((item) => (
                <Articles data={item} />
              ))}
          </ul>
        </div>
      </SingleContent>
    </section>
  );
}
export default MarketView;
