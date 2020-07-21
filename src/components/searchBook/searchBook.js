import React, { Component } from "react";
import "./searchBook.css";

class SearchBook extends Component {
  render() {
    return (
      <div className="search_div">
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <label>Search:</label>
          <input
            className="search"
            type="text"
            value={this.props.searchTerm}
            onChange={(e) => this.props.handleUpdate(e.target.value)}
          />
          <input type="submit" className="search" />
        </form>
      </div>
    );
  }
}

export default SearchBook;
