import React from 'react';

const ImageGalleryItem = ({ source, alternative, full, toggleModal }) => {
  return (
    <li onClick={() => toggleModal(full)}>
      <img className="ImageGalleryItem-image" src={source} alt={alternative} />
    </li>
  );
};

export default ImageGalleryItem;
