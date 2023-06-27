import React from 'react';

const Modal = ({ full, closeModal }) => {
  return (
    <div className="Overlay" onClick={() => closeModal()}>
      <div className="Modal">
        <img src={full} alt="imageeee" />
      </div>
    </div>
  );
};
// exp
export default Modal;
