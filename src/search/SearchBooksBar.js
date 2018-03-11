import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooksBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  handleChange = (e) => {
    const query = e.target.value
    this.props.onSearch(query);
    this.setState({
      value: query
    });
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text"
                 value={this.state.value}
                 onChange={this.handleChange}
                 placeholder="Search by title or author"/>
        </div>
      </div>
    )
  }
}

export default  SearchBooksBar;
