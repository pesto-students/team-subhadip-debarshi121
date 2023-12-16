import Book from "./Book";
import React, { useState } from "react";
import BookForm from "./BookForm";
import withLogging from "./WithLogging";
import BookDataLoader from "./BookDataLoader";
import useBookFilter from "../hooks/useBookFilter";
import useBookSorter from "../hooks/useBookSorter";

const BookList = (props) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const filteredBooks = useBookFilter(books, searchTerm);
  const sortedBooks = useBookSorter(books, sortBy);

  const handleAddBook = (title, author, year) => {
    const newBooks = [...books, { title, author, year }];
    setBooks(newBooks);
  };

  const handleDeleteBook = (index) => {
    const booksCopy = [...books];
    booksCopy.splice(index, 1);
    setBooks(booksCopy);
  };

  const _books =
    searchTerm !== ""
      ? [...filteredBooks]
      : sortBy !== "" && searchTerm === ""
      ? [...sortedBooks]
      : [...books];

  return (
    <section>
      {props.logData("Rendering Booklist")}
      <BookDataLoader setBooksState={(books) => setBooks(books)} />

      <BookForm
        onAddBooks={(title, author, year) => handleAddBook(title, author, year)}
      />

      <div className="flex flex-col items-center gap-5 mt-10">
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search a book"
          className="bg-gray-100 text-sm lg:w-4/12 md:w-6/12 w-10/12 rounded px-3 py-2 outline-none border border-gray-300"
        />
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-100 text-sm lg:w-4/12 md:w-6/12 w-10/12 rounded px-3 py-2 outline-none border border-gray-300"
        >
          <option value="">Sort By Default</option>
          <option value="asc">Name Ascending</option>
          <option value="desc">Name Descending</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 justify-center gap-5 text-center my-10 mx-10">
        {_books.map((b, i) => {
          return (
            <div className="" key={i}>
              <Book
                title={b.title}
                author={b.author}
                year={b.year}
                desc={b.desc}
              />
              <button
                className="text-red-500 text-sm"
                onClick={() => handleDeleteBook(i)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      {books.length === 0 && <div>Book list is empty</div>}
    </section>
  );
};

export default withLogging(BookList);
