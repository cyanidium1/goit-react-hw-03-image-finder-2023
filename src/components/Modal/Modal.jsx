import React from 'react';

const Modal = ({ full, closeModal }) => {
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
  const close = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className="Overlay" onClick={close}>
      <div className="Modal">
        <img src={full} alt="imageeee" />
      </div>
    </div>
  );
};
// exp
export default Modal;
