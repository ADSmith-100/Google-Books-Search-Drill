import React, { Component } from "react";
import "./App.css";
import SearchBook from "./components/searchBook/searchBook.js";
import SortBook from "./components/sortBook/sortBook.js";
import BookList from "./components/bookList/bookList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    let params = {
      q: "Henry III",
      maxResults: 5,
      key: "AIzaSyBUK42prIOR_hPyH0kdoJqTm8dq7R1WW6E",
    };
    let url = `https://www.googleapis.com/books/v1/volumes?q=${params.q}&maxResults=5&key=${params.key}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          books: data,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    return (
      <main className="App">
        <h1 className="banner">Google Books Search for Retards!</h1>

        <SearchBook />
        <SortBook />
        <BookList books={this.state.books} />
      </main>
    );
  }
}
export default App;
