import React from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container } from "../../Components/PokemonCard/pokemonCardStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import Header from "../../Components/Header/Header";

function PokemonListPage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error("error fetching Pokemon List:", error);
      });
  }, []);
  return (
    <Container>
      <Header />
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </Container>
  );
}

export default PokemonListPage;
