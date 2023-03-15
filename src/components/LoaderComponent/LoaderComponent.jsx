import { Blocks } from "react-loader-spinner";

import { Overlay } from "./LoaderComponent.style";

function LoaderComponent() {
  return (
    <Overlay>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </Overlay>
  );
}

export default LoaderComponent;
