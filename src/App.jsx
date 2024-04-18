import React, { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import CardContainer from "./CardContainer.jsx";
import Search from "./Search/Search.jsx";
import "./App.css";

function App() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [pokemonData, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
    let newList = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search)
    );
    console.log(search);
    setFilteredList(newList);
    displaySearch();
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network could not complete request");
        }
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        console.log(pokemonData);
      }
    };
    fetchPokemon();
  }, []);

  if (loading) {
    return <div className="error">Catching them all...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <Search handleSearch={handleSearch} />
      <CardContainer
        pokemonData={pokemonData}
        filteredList={filteredList}
        search={search}
      />
    </>
  );
}

export default App;
