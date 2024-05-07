import PokemonCard from "./Card/PokemonCard.jsx";
import { Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export default function CardContainer({ pokemonData, filteredList, search }) {
  const allPokemon = pokemonData.map((pokemon) => (
    <PokemonCard
      id={pokemon.id}
      key={uuidv4()}
      name={pokemon.name}
      type={
        pokemon.types && pokemon.types.length > 0
          ? pokemon.types[0].type.name
          : ""
      }
      type2={
        pokemon.types && pokemon.types.length > 1
          ? pokemon.types[1].type.name
          : ""
      }
    />
  ));

  const filteredPokemon = filteredList.map((pokemon) => (
    <PokemonCard
      id={pokemon.id}
      key={uuidv4()}
      name={pokemon.name}
      type={
        pokemon.types && pokemon.types.length > 0
          ? pokemon.types[0].type.name
          : ""
      }
      type2={
        pokemon.types && pokemon.types.length > 1
          ? pokemon.types[1].type.name
          : ""
      }
    />
  ));

  return (
    <Container fluid>
      <Row xs={1} sm={3} md={3} lg={3} xl={3}>
        {search ? filteredPokemon : allPokemon}
      </Row>
    </Container>
  );
}
