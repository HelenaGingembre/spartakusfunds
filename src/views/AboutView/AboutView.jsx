import { Title, TextJustify, SubTitle } from "./AboutView.style";

export function AboutView() {
  return (
    <>
      {/* <Title></Title> */}
      <section>
        <Title>About us </Title>
        <TextJustify>
          Our manager has more than 10 years of experience in financial markets,
          having worked on the trading floor of a leading global bank and for a
          $20bn value oriented investment fund.
        </TextJustify>
        <SubTitle>OUR MANAGER</SubTitle>
        <TextJustify>
          He holds of Bachelor of Commerce from McGill University in Montreal,
          and he received a Master in Finance from London Business School. He is
          also a CFA charterholder. He started his career on the equity trading
          floor of Lehman Brothers in Tokyo. After his Masters in Finance at
          London Business School, he joined the investment team of Orbis
          Investment Advisory, and covered Japanese equity, working directly
          with billionaire investor Allan Gray. In 2010, he left Orbis in order
          to manage his own funds.
        </TextJustify>
        <SubTitle>OUR PHILOSOPHY</SubTitle>
        <TextJustify>
          We have decided to manage our own capital, despite our relatively
          small size, because our experience with various banks and professional
          money managers has shown us that entities that accept third party
          funds are consistently more successful at collecting fees than at
          growing their clients' assets.
          <br />
          We are looking for like minded family offices and private investors to
          exchange ideas and cooperate in private equity projects.
          <br />
          We are not looking for funds to manage, as we believe that people
          should manage their capital themselves. However, we are involved in
          empowering people to manage their own money, as we want to contribute
          to other people's financial independence. Our manager is giving annual
          sessions at London Business School about investing. Should you be
          interested, please contact us and we will be happy to discuss your
          specific needs.
        </TextJustify>
      </section>
    </>
  );
}
export default AboutView;
