import { ModalBackground, ModalBody } from './Modal.styles';
import React, { useState } from 'react';

const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <h1>MODAL MODAL MODAL</h1>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
