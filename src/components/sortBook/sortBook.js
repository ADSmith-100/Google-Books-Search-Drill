import React, { Component } from "react";
import "./sortBook.css";

class SortBook extends Component {
  render() {
    return (
      <div className="sort_div">
        <form>
          <label>Print Type:</label>
          <select />
          <label>Book Type:</label>
          <select />
        </form>
      </div>
    );
  }
}

export default SortBook;
