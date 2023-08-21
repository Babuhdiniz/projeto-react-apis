import React from "react";
import { Container } from "./pokemonCardStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

function PokemonCard({ pokemon }) {
  const [pokemonData, setPokemonData] = useState({});
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setPokemonData(response.data);
        console.log(response);
      })

      .catch((error) => {
        console.error("error fetching Pokemon Data:", error);
      });
  }, [pokemon.url]);
  console.log(pokemonData);

  // const fetchPokemon = async () => {
  //   try {
  //     const response = await axios.get(BASE_URL);
  //     setPokemonData(response.data);
  //   } catch (error) {
  //     console.log("Erro ao buscar lista de pokemons");
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      {/* <img src={pokemonData.sprites?.front_default} alt={pokemonData.name} /> */}
      <img src={pokemonData?.sprites?.front_default} alt={pokemon.name} />
      {/* <img src={pokemonData?.sprites?.front_default} alt={pokemon.name} /> */}
      <div>
        <button>Adicionar à Pokedex</button>
        <button>Remover da Pokedex</button>
      </div>
    </Container>
  );
}

export default PokemonCard;
