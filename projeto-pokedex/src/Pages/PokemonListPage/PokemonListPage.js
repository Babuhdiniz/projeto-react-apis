import React from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import Header from "../../Components/Header/Header";
import { Container } from "./pokemonListPageStyle";

function PokemonListPage({ addToPokedex }) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        console.log(response.data.results);

        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error("error fetching Pokemon List:", error);
      });
  }, []);
  return (
    <>
      <div>
        <Header />
      </div>

      <Container>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            addToPokedex={addToPokedex}
          />
        ))}
      </Container>
    </>
  );
}

export default PokemonListPage;
