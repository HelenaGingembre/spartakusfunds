import {
  Title,
  FormContainer,
  SectionContact,
  JustifyBox,
  MapBox,
} from "./ContactView.style";
import FormContact from "../../components/FormContact";

const ContactView = () => {
  return (
    <SectionContact>
      <Title className="center topic">Contact</Title>
      <JustifyBox>
        If you are a like-minded family office or investor, an entrepreneur
        looking for funds, or if you are interested in our training sessions,
        please use the form below to contact us. We will be happy to hear from
        you and will get back to you shortly.
      </JustifyBox>
      <FormContainer>
        <FormContact />

        <MapBox id="map">
          <iframe
            title=" Contacts SpartacusPartners"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82735.3245498325!2d6.053469384191141!3d49.60757570595642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548cd9df32c57%3A0x400d1d6d1056d10!2z0JvRjtC60YHQtdC80LHRg9GA0LM!5e0!3m2!1suk!2slu!4v1700751379773!5m2!1suk!2slu"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </MapBox>
      </FormContainer>
    </SectionContact>
  );
};
export default ContactView;
