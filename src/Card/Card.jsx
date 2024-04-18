import "./Card.css";

export default function Card(props) {
  const imageURL = `https://img.pokemondb.net/sprites/emerald/normal/${props.name}.png`;

  return (
    <div className="pokemon-card">
      <h4>{props.name.toUpperCase()}</h4>
      <img src={imageURL} alt="" />
    </div>
  );
}
