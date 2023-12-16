import Book from "./Book";
import React from "react";
import BookForm from "./BookForm";
import withLogging from "./WithLogging";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: "Book 1",
          author: "Author 1",
          year: 2020,
          desc: "Book 1 Description"
        },
        {
          title: "Book 2",
          author: "Author 2",
          year: 2018,
          desc: "Book 2 Description"
        },
        {
          title: "Book 3",
          author: "Author 3",
          year: 2022,
          desc: "Book 3 Description"
        }
      ]
    };
  }

  handleAddBooks(title, author, year) {
    const newBooks = [...this.state.books, { title, author, year }];
    this.setState({ books: newBooks });
  }

  handleDeleteBook(index) {
    var books = [...this.state.books];
    books.splice(index, 1);
    this.setState({ books: books });
  }

  render() {
    this.props.logData("Rendering Booklist");
    return (
      <>
        <BookForm
          onAddBooks={(title, author, year) =>
            this.handleAddBooks(title, author, year)
          }
        />
        {this.state.books.length > 0 && (
          <div className="BookList">
            {this.state.books.map((b, i) => {
              return (
                <div key={i}>
                  <Book
                    title={b.title}
                    author={b.author}
                    year={b.year}
                    desc={b.desc}
                  />
                  <button
                    className="deleteBtn"
                    onClick={() => this.handleDeleteBook(i)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        )}
        {this.state.books.length === 0 && <div>Book list is empty</div>}
      </>
    );
  }
}

export default withLogging(BookList);
