import React, { Component } from "react";
import "./App.css";
import SearchBook from "./components/searchBook/searchBook.js";
import SortBook from "./components/sortBook/sortBook.js";
import BookList from "./components/bookList/bookList";

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1 className="banner">Google Books Search for Retards!</h1>

        <SearchBook />
        <SortBook />
        <BookList />
      </main>
    );
  }
}
export default App;
