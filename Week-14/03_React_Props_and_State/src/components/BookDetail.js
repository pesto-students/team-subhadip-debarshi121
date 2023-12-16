import { useState } from "react";

const BookDetail = ({ desc }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      {showDetails && <div>{desc}</div>}
      <button onClick={() => setShowDetails((prevState) => !prevState)}>
        {showDetails === true ? "Hide Details" : "Show Details"}
      </button>
    </>
  );
};

export default BookDetail;
