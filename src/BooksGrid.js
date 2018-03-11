import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  render () {
    return (
      <ol className="books-grid">
        {
          this.props.books.map((book) => (
            <li key={book.id}>
              <Book title={book.title}
                    authors={book.authors}
                    id={book.id}
                    imageLinks={book.imageLinks}
                    shelf={book.shelf}
                    onChangeBookShelf={this.props.onChangeBookShelf}
              />
            </li>
          ))
        }
      </ol>)
  }
}

export default BooksGrid
