const SearchBar = ({ handleSubmit, searchTerm, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for images"
      ></input>
    </form>
  );
};

export default SearchBar;
