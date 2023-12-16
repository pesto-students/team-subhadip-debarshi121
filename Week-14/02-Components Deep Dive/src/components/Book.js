import React from "react";
import BookDetail from "./BookDetail";

class Book extends React.PureComponent {
  render() {
    return (
      <div className="Book">
        <BookDetail {...this.props} />
      </div>
    );
  }
}

export default Book;
