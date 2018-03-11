import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from '../BooksGrid'

class SearchBooksResults extends  Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  render() {
    return (<div className="search-books-results">
      <BooksGrid books={this.props.books} onChangeBookShelf={this.props.onChangeBookShelf}/>
    </div>)
  }
}

export default SearchBooksResults;
