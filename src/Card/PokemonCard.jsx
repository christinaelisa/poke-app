import "../Card/Card.scss";
import { Card } from "react-bootstrap";

export default function PokemonCard(props) {
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`;

  let cardType = "card";
  let textType1 = "";
  let textType2 = "";

  if (props.type2 === "normal") {
    textType2 = "normal-text";
  } else if (props.type2 === "fire") {
    textType2 = "fire-text";
  } else if (props.type2 === "water") {
    textType2 = "water-text";
  } else if (props.type2 === "electric") {
    textType2 = "electric-text";
  } else if (props.type2 === "grass") {
    textType2 = "grass-text";
  } else if (props.type2 === "ice") {
    textType2 = "ice-text";
  } else if (props.type2 === "fighting") {
    textType2 = "fighting-text";
  } else if (props.type2 === "poison") {
    textType2 = "poison-text";
  } else if (props.type2 === "ground") {
    textType2 = "ground-text";
  } else if (props.type2 === "flying") {
    textType2 = "flying-text";
  } else if (props.type2 === "psychic") {
    textType2 = "psychic-text";
  } else if (props.type2 === "bug") {
    textType2 = "bug-text";
  } else if (props.type2 === "rock") {
    textType2 = "rock-text";
  } else if (props.type2 === "ghost") {
    textType2 = "ghost-text";
  } else if (props.type2 === "dragon") {
    textType2 = "dragon-text";
  } else if (props.type2 === "dark") {
    textType2 = "dark-text";
  } else if (props.type2 === "steel") {
    textType2 = "steel-text";
  } else if (props.type2 === "fairy") {
    textType2 = "fairy-text";
  } else if (props.type2 === "stellar") {
    textType2 = "stellar-text";
  } else if (props.type2 === "unknown" || "") {
    textType2 = "unknown-text";
  }

  if (props.type === "normal") {
    cardType = "normal-type";
    textType1 = "normal-text";
  } else if (props.type === "fire") {
    cardType = "fire-type";
    textType1 = "fire-text";
  } else if (props.type === "water") {
    cardType = "water-type";
    textType1 = "water-text";
  } else if (props.type === "electric") {
    cardType = "electric-type";
    textType1 = "electric-text";
  } else if (props.type === "grass") {
    cardType = "grass-type";
    textType1 = "grass-text";
  } else if (props.type === "ice") {
    cardType = "ice-type";
    textType1 = "ice-text";
  } else if (props.type === "fighting") {
    cardType = "fighting-type";
    textType1 = "fighting-text";
  } else if (props.type === "poison") {
    cardType = "poison-type";
    textType1 = "poison-text";
  } else if (props.type === "ground") {
    cardType = "ground-type";
    textType1 = "ground-text";
  } else if (props.type === "flying") {
    cardType = "flying-type";
    textType1 = "flying-text";
  } else if (props.type === "psychic") {
    cardType = "psychic-type";
    textType1 = "psychic-text";
  } else if (props.type === "bug") {
    cardType = "bug-type";
    textType1 = "bug-text";
  } else if (props.type === "rock") {
    cardType = "rock-type";
    textType1 = "rock-text";
  } else if (props.type === "ghost") {
    cardType = "ghost-type";
    textType1 = "ghost-text";
  } else if (props.type === "dragon") {
    cardType = "dragon-type";
    textType1 = "dragon-text";
  } else if (props.type === "dark") {
    cardType = "dark-type";
    textType1 = "dark-text";
  } else if (props.type === "steel") {
    cardType = "steel-type";
    textType1 = "steel-text";
  } else if (props.type === "fairy") {
    cardType = "fairy-type";
    textType1 = "fairy-text";
  } else if (props.type === "stellar") {
    cardType = "stellar-type";
    textType1 = "stellar-text";
  } else if (props.type === "unknown" || "") {
    cardType = "unknown-type";
    textType1 = "unknown-text";
  }

  return (
    <div class="mt-2 mb-2">
      <Card className={cardType}>
        <span class="poke-id fw-bold" className="poke-id">
          #{props.id}
        </span>
        <Card.Img
          class="mx-auto mt-4 mb-1 pokeimg"
          src={imageURL}
          alt={props.name}
        />
        <Card.Body class="mx-auto mb-3 card-text">
            <span class="py-2">
              {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </span>
        </Card.Body>
        <Card.Body class="mx-auto mb-3">
          <span className={textType1}>{props.type}</span>
          {props.type2.length > 0 ? (
            <span className={textType2}>{props.type2}</span>
          ) : (
            <span></span>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
