const useBookFilter = (books, setSearchTerm) => {
  return books.filter(
    (b) =>
      b.title.toLowerCase().includes(setSearchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(setSearchTerm.toLowerCase())
  );
};

export default useBookFilter;
