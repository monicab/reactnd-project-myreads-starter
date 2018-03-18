import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelve from './Bookshelve'
import SearchBooks from './search/SearchBooks'
import './App.css'

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  filterByShelfType = (shelfType) => {
    return this.state.books.filter((book) => {
      return book.shelf === shelfType
    });
  }

  onChangeBookShelf = (bookId, shelf) => {
    BooksAPI.update({id: bookId}, shelf)
      .then((book) => {
      })
      .then(() => {
        BooksAPI.getAll().then((books) => {
          console.log(books)
          this.setState({books})
        })
      })
  }

  bookShelves = [
    {
      shelfType: 'currentlyReading',
      title: 'Currently Reading'
    },
    {
      shelfType: 'wantToRead',
      title: 'Want to Read'
    },
    {
      shelfType: 'read',
      title: 'Read'
    }
  ];

  renderBookShelves = (bookShelves) => {
    return (
      <div>
        {bookShelves.map((bookShelf) => {
          return (<Bookshelve key={bookShelf.shelfType}
                              books={this.filterByShelfType(bookShelf.shelfType)}
                              onChangeBookShelf={this.onChangeBookShelf}
                              title={bookShelf.title}/>)
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                { this.renderBookShelves(this.bookShelves) }
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks booksInShelves={this.state.books} onChangeBookShelf={this.onChangeBookShelf}/>
        )}/>
      </div>
    )
  }
}

export default App

// <div className="search-books">
//   <div className="search-books-bar">
//   <Link to="/" className="close-search">Close</Link>
//   <div className="search-books-input-wrapper">
//   {/*
//                   NOTES: The search from BooksAPI is limited to a particular set of search terms.
//                   You can find these search terms here:
//                   https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
//
//                   However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
//                   you don't find a specific author or title. Every search is limited by search terms.
//                 */}
// <input type="text" placeholder="Search by title or author"/>
// </div>
// </div>
// <div className="search-books-results">
//   <ol className="books-grid"></ol>
//   </div>
//   </div>
