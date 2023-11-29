import { createPortal } from "react-dom";
import { Helmet } from "react-helmet";

function Modal() {
  return createPortal(<p>Moj modal</p>, document.querySelector("#modal-root"));
}

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      Home
      <Modal />
    </div>
  );
}
