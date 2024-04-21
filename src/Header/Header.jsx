import "./Header.css";
import "../Search/Search.jsx";
import "../Search/Search.css";

export default function Header({ handleSearch }) {
  return (
    <>
      <div>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <div className="app-title">PokéApp</div>
            <form class="d-flex" role="search">
              <input
                class="d-flex"
                type="search"
                placeholder="Search Pokémon..."
                aria-label="Search"
                onChange={handleSearch}
              />
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
