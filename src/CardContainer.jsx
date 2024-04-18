import Card from "./Card/Card.jsx";

export default function CardContainer({ pokemonData, filteredList, search }) {
  const allPokemon = pokemonData.map((pokemon, index) => (
    <Card key={index} name={pokemon.name} id={pokemon.id} />
  ));

  const filteredPokemon = filteredList.map((pokemon, index) => (
    <Card key={index} name={pokemon.name} id={pokemon.id} />
  ));

  return (
    <div className="card-container">
      {search ? filteredPokemon : allPokemon}
    </div>
  );
}
