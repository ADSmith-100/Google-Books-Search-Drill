import React, { Component } from "react";
import "./searchBook.css";

class SearchBook extends Component {
  render() {
    return (
      <div className="search_div">
        <form>
          <label>Search:</label>
          <input className="search" type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBook;
