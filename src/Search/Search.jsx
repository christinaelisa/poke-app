import "./Search.css";

export default function Search(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={props.handleSearch}
        onTouch={props.handleSearch}
      />
    </div>
  );
}
