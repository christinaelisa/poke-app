import "./Header.css";
import "../Search/Search.css";
import Search from "../Search/Search.jsx";

export default function Header({ handleSearch }) {
  return (
    <>
      <div className="nav-bg">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="app-title">PokéDex</div>
            <Search handleSearch={handleSearch} />
          </div>
        </nav>
      </div>
    </>
  );
}
