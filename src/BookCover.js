import React, { Component } from "react"
import PropTypes from "prop-types"

class BookCover extends Component {
  static propTypes = {
    imageLinks: PropTypes.object
  }

  width = 128
  height = 192

  getBookCoverStyle = (imageLinks) => {
    const style = {
      width: this.width,
      height: this.height,
    };
    const backgroundImage = this.getBackgroundImage(imageLinks);

    if (backgroundImage) { style.backgroundImage = backgroundImage }
    return style;
  }

  getBackgroundImage = (imageLinks) => {
    if (imageLinks && imageLinks.smallThumbnail) {
      return `url("${imageLinks.smallThumbnail}")`
    }
  }


  render() {
    return (<div className="book-cover"
                 style={this.getBookCoverStyle(this.props.imageLinks)}/>)
  }
}

export default BookCover;
