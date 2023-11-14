import {
  Title,
  FormContainer,
  SectionContact,
  JustifyBox,
  MapBox,
} from "./ContactView.style";
import FormContact from "../../components/FormContact";

const ContactView = () => {
  const sendEmail = (newEmail) => {
    console.log("newEmail---------> ", newEmail);
  };

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
        <FormContact onSubmit={sendEmail} />

        <MapBox id="map">
          <iframe
            title=" Contacts SpartacusPartners"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785277.9861272653!2d174.1807797935084!3d-38.03410393427533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d1e2fa1401571%3A0x7f774dc8f8937842!2zMzY4MCBPaGF1cG8gUmQsIEdsZW52aWV3LCBSdWt1aGlhIDMyODIsINCd0L7QstCw0Y8g0JfQtdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sua!4v1503174868792"
            // frameborder="0"
            // allowfullscreen="allowfullscreen"
          ></iframe>
        </MapBox>
      </FormContainer>
    </SectionContact>
  );
};
export default ContactView;
