import React, { Component } from "react";
import "./bookList.css";

const dummybooks = [
  {
    title: "Henry I",
    author: "Some Cunt",
    price: "$69",
    description: "some garbage",
  },

  {
    title: "Henry II",
    author: "Some Whores Cunt",
    price: "$69",
    description: "some garbage",
  },

  {
    title: "Henry IIIIII",
    author: "Some Cunt",
    price: "$69",
    description: "some garbage",
  },
];

class BookList extends Component {
  render() {
    return (
      <div className="book_list">
        {dummybooks.map((books) => (
          <div>
            <h1 className="book_title">{books.title}</h1>
            <img
              className="covers"
              src="https://via.placeholder.com/200"
              alt="Book Covers"
            ></img>
            <ul className="books">
              <li>{books.author}</li>
              <li>{books.price}</li>
              <li>{books.description}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default BookList;
