import "./Search.scss";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, IconButton } from "@mui/material";

export default function Search({ handleSearch }) {
  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="d-flex"
          type="search"
          placeholder="Search Pokémon..."
          aria-label="Search"
          onChange={handleSearch}
        />
      </form>
    </>
  );
}
