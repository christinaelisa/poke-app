import "./Header.scss";
import "../Search/Search.scss";
import Search from "../Search/Search.jsx";

export default function Header({ handleSearch }) {
  return (
    <>
      <div className="navbar">
        <div className="container-fluid">
          <div className="app-title">PokéDex</div>
          <Search handleSearch={handleSearch} />
        </div>
      </div>
    </>
  );
}
