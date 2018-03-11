import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  static propTypes = {
    booksInShelves: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  state = {
    searchResults: []
  };

  booksInShelvesByBookId = {}

  componentDidMount() {
    this.props.booksInShelves.forEach((bookInShelve) => {
      this.booksInShelvesByBookId[bookInShelve.id] = bookInShelve;
    });
  }

  searchBooks = (query) => {
    query = query.trim()
    if (query === "") {
      this.setState({
        searchResults: []
      })
      return
    }

    BooksAPI.search(query).then((response) => {
      console.log("search = ", this.booksInShelvesByBookId);
      const results = (response.error) ? [] : response
      const resultsWithShelves = this.applyShelvesToResults(results)
      this.setState({
        searchResults: resultsWithShelves
      })
    });
  };

  applyShelvesToResults = (searchResults) => {
    return searchResults.map((book) => {
      book.shelf = (this.booksInShelvesByBookId[book.id]) ? this.booksInShelvesByBookId[book.id].shelf : '';
      return book;
    });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar onSearch={this.searchBooks}/>
        <SearchBooksResults books={this.state.searchResults} onChangeBookShelf={this.props.onChangeBookShelf}/>
      </div>
    )
  }
}

export default SearchBooks;


