import React, { Component } from 'react';

class Modal extends Component {
  close = e => {
    if (e.target === e.currentTarget || e.key === 'Escape') {
      this.props.closeModal();
    }
    console.log(e);
  };

  componentDidMount() {
    window.addEventListener('keydown', this.close);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.close);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.close}>
        <div className="Modal">
          <img src={this.props.full} alt="imageeee" />
        </div>
      </div>
    );
  }
}

export default Modal;
