import { useState } from "react";

const BookForm = ({ onAddBooks }) => {
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [year, setYear] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBooks(title, author, year);
  };

  return (
    <div className="BookFormContainer">
      <form className="BookForm">
        <div>
          <label>Title:</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" onChange={(e) => setYear(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
