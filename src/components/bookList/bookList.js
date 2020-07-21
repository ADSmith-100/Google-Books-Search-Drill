import React, { Component } from "react";
import "./bookList.css";
import Book from "../book/book";

class BookList extends Component {
  render() {
    const list = this.props.books.map((book, key) => (
      <Book {...book} key={key} />
    ));
    return <div className="book_list">{list}</div>;
  }
}

BookList.defaultProps = {
  books: [],
};

export default BookList;
