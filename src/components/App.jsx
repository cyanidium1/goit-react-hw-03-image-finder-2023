import '../styles.css';
import React, { Component } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import '../styles.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
//alternative with gallerylibrary
// import ImageGallery from 'react-image-gallery';

const key = '27914818-5e05e7f617900cef74ea356f6';
axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

export class App extends Component {
  state = {
    pictures: null,
    searchName: '',
    loading: false,
    modal: false,
    modalFull: null,
    // perPage: 12,
  };

  setValue = searchName => {
    this.setState({ searchName: searchName });
  };

  toggleModal = full => {
    this.setState({ modal: true, modalFull: full });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  // loadMore = () => {
  //   this.setState({ perPage: this.state + 12 });
  // };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchName !== this.state.searchName) {
      // this.setState({ perPage: 12 });
      this.setState({ loading: true });
      // just to see if loader works!
      setTimeout(() => {
        axios
          .get(
            `https://pixabay.com/api/?q=${this.state.searchName}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
          )
          .then(response => {
            if (response.data.hits.length > 0) {
              this.setState({ pictures: response.data.hits });
            } else {
              this.setState({ pictures: null });
            }
          })
          .catch(error => console.log('error msg:', error))
          .finally(this.setState({ loading: false }));
      }, 1000);
    }
  }

  render() {
    return (
      <>
        <Searchbar getName={this.setValue} />
        <ImageGallery
          pictures={this.state.pictures}
          toggleModal={this.toggleModal}
        />
        {this.state.loading && <Loader />}
        {this.state.pictures && <Button click={this.loadMore} />}
        {this.state.modal && (
          <Modal full={this.state.modalFull} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
