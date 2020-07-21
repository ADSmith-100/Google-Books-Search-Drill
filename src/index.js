import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const dummybooks = [
  {
    title: "Henry I",
    author: "Some person",
    price: "$59",
    description: "some garbage",
  },

  {
    title: "Henry II",
    author: "Some Idiot",
    price: "$59",
    description: "some garbage",
  },

  {
    title: "Henry IIIIII",
    author: "Some Guy",
    price: "$59",
    description: "some garbage",
  },
];

ReactDOM.render(<App books={dummybooks} />, document.getElementById("root"));
