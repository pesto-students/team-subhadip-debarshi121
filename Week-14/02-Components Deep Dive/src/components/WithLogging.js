const WithLogging = (BookList) => {
  return () => {
    console.log("BookList rendered");
    return <BookList />;
  };
};

export default WithLogging;
