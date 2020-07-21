import React, { Component } from "react";
import "./searchBar.css";
import SearchBook from "../searchBook/searchBook";
import SortBook from "../sortBook/sortBook";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <SearchBook
          searchTerm={this.props.searchTerm}
          handleUpdate={this.props.handleUpdate}
          handleSubmit={this.props.handleSubmit}
        />
        <SortBook filterOptions={this.props.filterOptions} />
      </div>
    );
  }
}

export default SearchBar;
