function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      placeholder="Search projects"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
