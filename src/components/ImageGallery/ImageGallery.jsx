import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export default class ImageGallery extends Component {
  render() {
    const { pictures, toggleModal } = this.props;
    return (
      <>
        {!pictures && <p>No data</p>}
        <ul className="ImageGallery">
          {pictures &&
            pictures.map(el => (
              <ImageGalleryItem
                className="ImageGalleryItem"
                key={el.id}
                source={el.webformatURL}
                alternative={el.tags}
                full={el.largeImageURL}
                toggleModal={toggleModal}
              />
            ))}
        </ul>
      </>
    );
  }
}
