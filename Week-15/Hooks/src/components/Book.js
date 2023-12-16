import React from "react";
import BookDetail from "./BookDetail";

class Book extends React.PureComponent {
  render() {
    return (
      <div className="flex rounded flex-col bg-white shadow p-5">
        <h3>{this.props.title}</h3>
        <p>Author: {this.props.author}</p>
        <p>Year: {this.props.year}</p>
        <BookDetail desc={this.props.desc} />
      </div>
    );
  }
}

export default Book;
