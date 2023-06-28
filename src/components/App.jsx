import '../styles.css';
import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import '../styles.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { getter } from 'utils/getter';

export class App extends Component {
  state = {
    pictures: null,
    searchName: '',
    loading: false,
    modal: false,
    modalFull: null,
    page: 1,
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

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      getter(this.state.searchName, this.state.page)
        .then(response => {
          if (response.data.hits.length > 0) {
            this.setState({
              pictures: [...this.state.pictures, ...response.data.hits],
            });
          }
        })
        .catch(error => console.log('error msg:', error))
        .finally(this.setState({ loading: false }));
    }

    if (prevState.searchName !== this.state.searchName) {
      this.setState({ loading: true });

      getter(this.state.searchName, this.state.page)
        .then(response => {
          if (response.data.hits.length > 0) {
            this.setState({ pictures: response.data.hits });
          } else {
            this.setState({ pictures: null });
          }
        })
        .catch(error => console.log('error msg:', error))
        .finally(this.setState({ loading: false }));
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
