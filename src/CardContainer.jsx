import PokemonCard from "./Card/PokemonCard.jsx";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

export default function CardContainer({ pokemonData, filteredList, search }) {
  const allPokemon = pokemonData.map((pokemon, index, type, id) => (
    <PokemonCard
      key={index}
      name={pokemon.name}
      id={pokemon.id}
      type={pokemon.type}
    />
  ));

  const filteredPokemon = filteredList.map((pokemon, index, type, id) => (
    <PokemonCard
      key={index}
      name={pokemon.name}
      id={pokemon.id}
      type={pokemon.type}
    />
  ));

  return (
    <Container fluid>
      <Row xs={3} sm={4} md={4} lg={5} xl={6}>
        {search ? filteredPokemon : allPokemon}
      </Row>
    </Container>
  );
}
