import "./Card.css";
import { Card } from "react-bootstrap";

export default function PokemonCard(props) {
  const imageURL = `https://img.pokemondb.net/sprites/emerald/normal/${props.name}.png`;

  return (
    <Card>
      <Card.Img class="mx-auto mt-4 mb-1" src={imageURL} />
      <Card.Body class="mx-auto mb-3">
        <p className="card-text">{props.name.toUpperCase()}</p>
        <p>{props.type}</p>
      </Card.Body>
    </Card>
  );
}
