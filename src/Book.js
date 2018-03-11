import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfSender from './BookShelfSender'
import BookCover from './BookCover'

class Book extends Component {
  static propTypes = {
    authors: PropTypes.array,
    id: PropTypes.string.isRequired,
    imageLinks: PropTypes.object,
    shelf: PropTypes.string,
    title: PropTypes.string.isRequired,

    onChangeBookShelf: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className="book">
        <div className="book-top">
          <BookCover imageLinks={this.props.imageLinks}/>
          <BookShelfSender currentShelf={this.props.shelf}
                           onChangeBookShelf={(bookShelf) => {
                             this.props.onChangeBookShelf(this.props.id, bookShelf)
                           }}/>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors ? this.props.authors.join(', ') : ''}</div>
      </div>
    )
  }
}

export default Book
