import "../Card/Card.css";
import { Card } from "react-bootstrap";

export default function PokemonCard(props) {
  const imageURL = `https://img.pokemondb.net/sprites/emerald/normal/${props.name}.png`;

  return (
    <Card className="card">
      <div class="poke-id fw-bold">#{props.id}</div>
      <Card.Img class="mx-auto mt-4 mb-1" src={imageURL} />
      <Card.Body class="mx-auto mb-3">
        <div class="card-text">
          <p>
            <span class="fw-bold">{props.name.toUpperCase()}</span>
            <br></br>
            {props.type}
            {props.type2}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}
