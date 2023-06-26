import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchName: '',
  };
  handleNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      alert('Type smth then search');
      return;
    }
    this.props.getName(this.state.searchName);
    this.setState({ searchName: '' });
  };
  render() {
    return (
      <div className="SearchForm">
        <form onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className="SearchForm-button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
