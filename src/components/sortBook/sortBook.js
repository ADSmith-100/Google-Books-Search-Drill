import React, { Component } from "react";
import "./sortBook.css";

class SortBook extends Component {
  render() {
    return (
      <div className="sort_div">
        <form>
          <label>Filtering:</label>
          <select onChange={(e) => this.props.handleFilter(e.target.value)}>
            <option value="partial">partial</option>
            <option selected value="full">
              full
            </option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="ebooks">ebooks</option>
          </select>
          <label>Print Type:</label>
          <select onChange={(e) => this.props.handleType(e.target.value)}>
            <option selected value="all">
              all
            </option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SortBook;
