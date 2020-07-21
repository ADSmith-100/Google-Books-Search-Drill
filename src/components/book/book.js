import React, { Component } from "react";
import "./book.css";

class Book extends Component {
  render() {
    const { title, description } = this.props.volumeInfo;
    const { thumbnail } = this.props.volumeInfo.imageLinks;
    const amount = this.props.saleInfo.listPrice
      ? this.props.saleInfo.listPrice.amount
      : 0;
    const author = this.props.volumeInfo.authors
      ? this.props.volumeInfo.authors[0]
      : "No author given";
    return (
      <div>
        <h1 className="book_title">{title}</h1>
        <img className="covers" src={thumbnail} alt="Book Covers"></img>
        <ul className="books">
          <li>{author}</li>
          <li>{amount}</li>
          <li>{description}</li>
        </ul>
      </div>
    );
  }
}

export default Book;
