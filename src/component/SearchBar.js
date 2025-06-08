const SearchBar = ({ handleSubmit, searchTerm, handleInputChange }) => {
  return (
    <div>
      <form className="input-group" onSubmit={handleSubmit}>
        <span class="input-group-text rounded" id="addon-wrapping">
          Search
        </span>
        <input
          className="shadow-sm rounded"
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for images"
          aria-label="Search images"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
