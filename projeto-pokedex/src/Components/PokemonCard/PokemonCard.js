import React from "react";
import { Container } from "./pokemonCardStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function PokemonCard({ pokemon, addToPokedex, removeFromPokedex }) {
  const location = useLocation();
  const [pokemonData, setPokemonData] = useState({});
  console.log(pokemon);
  const navigation = useNavigate();
  const goToPokemonDetailPage = (name) => {
    navigation(`/pokemon/${pokemon.name}`);
  };

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setPokemonData(response.data);
        console.log(response);
      })

      .catch((error) => {
        console.error("error fetching Pokemon Data:", error);
      });
  }, [pokemon.url]);
  console.log(pokemonData);

  return (
    <Container>
      <img src={pokemonData?.sprites?.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>

      <div>
        {location.pathname === "/" ? (
          <button onClick={() => addToPokedex(pokemon)}>
            Adicionar à Pokédex
          </button>
        ) : (
          <button onClick={() => removeFromPokedex(pokemon)}>
            Remover da Pokédex
          </button>
        )}
        <button onClick={() => goToPokemonDetailPage(navigation, pokemon.name)}>
          Ver os detalhes
        </button>
      </div>
    </Container>
  );
}

export default PokemonCard;
