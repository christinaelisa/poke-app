import React, { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import CardContainer from "./CardContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { debounce } from "lodash";

function App() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [pokemonData, setPokemon] = useState([]);
  const [allPokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value.trim());
  };

  const debouncedSearch = debounce((value) => {
    let newList = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(newList);
  }, 1000);

  useEffect(() => {
    debouncedSearch(search);
  }, [search, debouncedSearch]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network could not complete request");
        }
        const data = await response.json();
        setPokemon(data.results);
        const pokeURL = data.results.map((pokemon) => pokemon.url);
        const allPokeData = await Promise.all(pokeURL.map((url) => fetch(url)));
        const allPokeObj = await Promise.all(
          allPokeData.map((res) => res.json())
        );
        setPokemon(allPokeObj);
        console.log(allPokeObj);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  if (loading) {
    return <div className="error">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <CardContainer
        pokemonData={pokemonData}
        allPokemonData={allPokemonData}
        filteredList={filteredList}
        search={search}
      />
    </>
  );
}

export default App;
