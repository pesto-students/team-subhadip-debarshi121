import { useState } from "react";

const BookForm = ({ onAddBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBooks(title, author, year);
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <section className="bg-gray-100 lg:w-4/12 md:w-6/12 w-10/12 p-5 mx-auto">
      <form className="">
        <div className="flex flex-col mb-2 gap-2">
          <label>Title:</label>
          <input
            className="p-1 outline-none focus:outline-blue-200 rounded"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2 gap-2">
          <label>Author:</label>
          <input
            className="p-1 outline-none focus:outline-blue-200 rounded"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2 gap-2">
          <label>Year:</label>
          <input
            className="p-1 outline-none focus:outline-blue-200 rounded"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-green-600 px-3 rounded mt-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookForm;
