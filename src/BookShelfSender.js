import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Controlled Component
// https://reactjs.org/docs/forms.html
class BookShelfSender extends Component {
  static propTypes = {
    currentShelf: PropTypes.string,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  state = {
    value: 'none'
  }

  availableShelfList = [
    {
      shelfType: 'none',
      label: 'Move to',
      disabled: true
    },
    {
      shelfType: 'currentlyReading',
      label: 'Currently Reading'
    },
    {
      shelfType: 'wantToRead',
      label: 'Want to Read'
    },
    {
      shelfType: 'read',
      label: 'Read'
    }
  ]

  componentDidMount() {
    // TODO: Confirm this is the best way to initialize state!!!
    // This is an anti pattern so not sure how to do this, otherwise
    this.setState({
      value: this.props.currentShelf
    })
  }

  handleChange = (e) => {
    this.props.onChangeBookShelf(e.target.value)
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange} >
          {
            this.availableShelfList.map((shelf) => {
              return (<option key={shelf.shelfType} value={shelf.shelfType} disabled={shelf.disabled || false}>{shelf.label}</option>)
            })
          }
        </select>
      </div>
    )
  }
}

export default BookShelfSender


