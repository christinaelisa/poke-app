import PokemonCard from "./Card/PokemonCard.jsx";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

export default function CardContainer({ pokemonData, filteredList, search }) {
  const allPokemon = pokemonData.map((pokemon, index) => (
    <Col>
      <PokemonCard key={index} name={pokemon.name} id={pokemon.id} />
    </Col>
  ));

  const filteredPokemon = filteredList.map((pokemon, index) => (
    <Col>
      <div className="poke-card">
        <PokemonCard key={index} name={pokemon.name} id={pokemon.id} />
      </div>
    </Col>
  ));

  return (
    <Container fluid>
      <Row xs={3} sm={3} md={4} lg={5} xl={6}>
        {search ? filteredPokemon : allPokemon}
      </Row>
    </Container>
  );
}
