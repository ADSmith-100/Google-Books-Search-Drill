import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/searchBook/searchBook.js";
import SortBook from "./components/sortBook/sortBook";
import BookList from "./components/bookList/bookList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "ghosts",
      filterOption: "full",
      books: [],
      error: null,
      printType: "all",
    };
  }

  handleType = (type) => {
    this.setState({
      printType: type,
    });
  };

  handleFilter = (filter) => {
    this.setState({
      filterOption: filter,
    });
  };

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term,
    });
  };

  runSearch = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm);
    let params = {
      q: this.state.searchTerm,
      maxResults: 5,
      key: "AIzaSyBUK42prIOR_hPyH0kdoJqTm8dq7R1WW6E",
      filterOption: this.state.filterOption,
      printType: this.state.printType,
    };
    let url = `https://www.googleapis.com/books/v1/volumes?q=${params.q}&printType=${params.printType}&filter=${params.filterOption}&maxResults=5&key=${params.key}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          books: data.items,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    return (
      <main className="App">
        <h1 className="banner">Google Books Search</h1>

        <SearchBar
          {...this.state}
          handleUpdate={this.updateSearchTerm}
          handleSubmit={this.runSearch}
        />

        <SortBook
          {...this.state}
          handleFilter={this.handleFilter}
          handleType={this.handleType}
        />
        <BookList {...this.state} />
      </main>
    );
  }
}
export default App;
