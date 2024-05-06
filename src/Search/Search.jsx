import "./Search.css";

export default function Search({ handleSearch }) {
  return (
    <form className="d-flex" role="search">
      <input
        className="d-flex"
        type="search"
        placeholder="Search Pokémon..."
        aria-label="Search"
        onChange={handleSearch}
      />
    </form>
  );
}
