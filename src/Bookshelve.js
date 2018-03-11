import React from 'react'
import { PropTypes } from 'prop-types'
import BooksGrid from './BooksGrid'

class Bookshelve extends React.Component {
  static propTypes = {
    books: PropTypes.array,
    title: PropTypes.string,
    onChangeBookShelf: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={this.props.books} onChangeBookShelf={this.props.onChangeBookShelf}/>
        </div>
      </div>
    )
  }
}

export default Bookshelve;
