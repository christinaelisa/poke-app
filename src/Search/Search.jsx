import "./Search.css";

export default function Search(props) {
  return (
    <>
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={props.handleSearch}
      />
    </>
  );
}
