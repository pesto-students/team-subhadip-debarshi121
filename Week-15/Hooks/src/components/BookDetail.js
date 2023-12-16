import { useState } from "react";

const BookDetail = ({ desc }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      {showDetails && (
        <div className="bg-gray-100 p-5 mt-5 rounded">{desc}</div>
      )}
      <button
        className="text-blue-500 mt-5"
        onClick={() => setShowDetails((prevState) => !prevState)}
      >
        {showDetails === true ? "Hide Details" : "Show Details"}
      </button>
    </>
  );
};

export default BookDetail;
