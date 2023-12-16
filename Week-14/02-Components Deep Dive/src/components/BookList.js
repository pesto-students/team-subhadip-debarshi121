import Book from "./Book";
import React from "react";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.books = [
      { title: "Book 1", author: "Author 1", year: 2020 },
      { title: "Book 2", author: "Author 2", year: 2018 },
      { title: "Book 3", author: "Author 3", year: 2022 }
    ];
  }

  render() {
    return (
      <div className="BookList">
        {this.books.map((b, i) => {
          return (
            <Book key={i} title={b.title} author={b.author} year={b.year} />
          );
        })}
      </div>
    );
  }
}

export default BookList;
