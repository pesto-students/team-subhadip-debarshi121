import Book from "./Book";
import React from "react";
import BookForm from "./BookForm";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { title: "Book 1", author: "Author 1", year: 2020 },
        { title: "Book 2", author: "Author 2", year: 2018 },
        { title: "Book 3", author: "Author 3", year: 2022 }
      ]
    };
  }

  handleAddBooks(title, author, year) {
    const newBooks = this.state.books;
    newBooks.push({ title, author, year });
    this.setState({ books: newBooks });
  }

  render() {
    return (
      <>
        <BookForm onAddBooks={this.handleAddBooks.bind(this)} />
        <div className="BookList">
          {this.state.books.map((b, i) => {
            return (
              <Book key={i} title={b.title} author={b.author} year={b.year} />
            );
          })}
        </div>
      </>
    );
  }
}

export default BookList;
