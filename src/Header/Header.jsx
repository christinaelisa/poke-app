import "./Header.css";
import "../Search/Search.jsx";
import "../Search/Search.css";

export default function Header({ handleSearch }) {
  return (
    <>
      <div class="nav-bg">
        <nav class="navbar">
          <div class="container-fluid">
            <div className="app-title">PokéDex</div>
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
