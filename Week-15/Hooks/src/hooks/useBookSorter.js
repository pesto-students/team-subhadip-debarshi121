const useBookSorter = (books = [], sortBy) => {
  if (!sortBy) {
    return books;
  }
  if (sortBy === "asc") {
    return books.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
  }
  return books.sort((a, b) => {
    return a.title < b.title ? 1 : -1;
  });
};

export default useBookSorter;
