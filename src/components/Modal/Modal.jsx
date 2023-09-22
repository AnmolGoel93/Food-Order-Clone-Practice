import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
