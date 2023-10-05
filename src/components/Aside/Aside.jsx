import photoAside from "../../assets/images/building.jpg";
import {
  Advertise,
  BoxBlue,
  ImgSide,
  LinkSide,
  Side,
  SubTitle,
  TextSide,
  Wrapper,
} from "./Aside.style";

const Aside = () => {
  return (
    <Wrapper>
      <Side>
        <ImgSide src={photoAside} alt="Skyscraper" />

        <TextSide>
          We manage the assets of a small family office based in Luxembourg. Our
          mission is to deliver long term outstanding absolute returns while
          investing in sustainable, ethical companies.
          <LinkSide href="#"> Learn more...</LinkSide>
        </TextSide>
      </Side>
      <Advertise>
        <SubTitle>Our Philosophy</SubTitle>
        <p>A quote that summarizes it all...</p>
        <BoxBlue>
          <p>
            "The stock market is a highly efficient mechanism for the transfer
            of wealth from the impatient to the patient."
          </p>
        </BoxBlue>
        <p>Warren Buffet</p>
      </Advertise>
    </Wrapper>
  );
};

export default Aside;
