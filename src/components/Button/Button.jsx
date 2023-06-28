import React from 'react';

const Button = ({ click }) => {
  return (
    <button onClick={click} className="Button">
      Load more
    </button>
  );
};

export default Button;
