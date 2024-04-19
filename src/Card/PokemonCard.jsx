import "./Card.css";
import { Card } from "react-bootstrap";

export default function PokemonCard(props) {
  const imageURL = `https://img.pokemondb.net/sprites/emerald/normal/${props.name}.png`;

  return (
    <Card className="my-1 text-center shadow pokemon-card">
      <Card.Body className="card-text">{props.name.toUpperCase()}</Card.Body>
      <Card.Img src={imageURL} />
    </Card>
  );
}
