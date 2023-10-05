import errorImage from "../../assets/images/logo.jpg";
import { Img, Title } from "./NotFoundView.style";

const NotFoundView = () => {
  return (
    <div role="alert">
      <Title>Page not found 😨</Title>
      <Img src={errorImage} width="650" alt="Error" />
    </div>
  );
};

export default NotFoundView;
