import React from "react";
import BookDetail from "./BookDetail";

class Book extends React.PureComponent {
  render() {
    return (
      <div className="Book">
        <h3>{this.props.title}</h3>
        <p>Author: {this.props.author}</p>
        <p>Year: {this.props.year}</p>
        <BookDetail desc={this.props.desc} />
      </div>
    );
  }
}

export default Book;
