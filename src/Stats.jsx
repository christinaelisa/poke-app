import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Card } from "react-bootstrap";
import "./Stats.scss";

export default function Stats() {
  const params = useParams();
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  const [pokemonStats, setPokemonStats] = useState([]);
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPokemonStats(data))
      .then(console.log(pokemonStats));
  }, [params.id]);

  return (
    <>
      {pokemonStats ? (
        <Card class="stats-card">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <ArrowBackIcon />
            </div>
          </Link>
          <Card.Img
            class="poke-img mx-auto"
            src={imageURL}
            alt={
              pokemonStats.name
                ? `${
                    pokemonStats.name.charAt(0).toUpperCase() +
                    pokemonStats.name.slice(1)
                  }`
                : "image of pokemon"
            }
          />
          <Card.Body class="stats-title mx-auto">
            <span>
              {pokemonStats.name
                ? `${
                    pokemonStats.name.charAt(0).toUpperCase() +
                    pokemonStats.name.slice(1)
                  }`
                : ""}
            </span>
            <table class="table mx-auto">
              <tbody>
                <tr>
                  <td>ID&nbsp;</td>
                  <td>{`#${params.id}`}</td>
                </tr>
                <tr>
                  <td>Height&nbsp;</td>
                  <td>
                    {pokemonStats.height
                      ? `${Math.floor(pokemonStats.height / 12)} ft. ${
                          pokemonStats.height % 12
                        } in.`
                      : "loading"}
                  </td>
                </tr>
                <tr>
                  <td>Weight&nbsp;</td>
                  <td>
                    {pokemonStats.weight ? pokemonStats.weight : "loading"} lbs
                  </td>
                </tr>
                <tr>
                  <td>Abilities&nbsp;</td>
                  <td>
                    {" "}
                    {pokemonStats.abilities
                      ? pokemonStats.abilities[0].ability.name
                      : "loading"}
                    {pokemonStats.length > 0 &&
                    !pokemonStats.abilities[1].ability.name == "none"
                      ? `${pokemonStats.abilities[1].ability.name}`
                      : ""}
                  </td>
                </tr>
                <tr>
                  <td>Base Exp.&nbsp;</td>
                  <td>
                    {pokemonStats.base_experience
                      ? pokemonStats.base_experience
                      : "loading"}
                  </td>
                </tr>
                <tr>
                  <td>Held items&nbsp;</td>
                  <td>
                    {pokemonStats.length > 0 ? pokemonStats.held[0] : "none"}
                  </td>
                </tr>
              </tbody>
            </table>
          </Card.Body>
        </Card>
      ) : (
        <>Loading stats....</>
      )}
    </>
  );
}
