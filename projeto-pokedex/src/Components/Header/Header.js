import React from "react";
import { Container } from "./headerStyle";
import { useLocation, useNavigate } from "react-router-dom";
import {
  goToPokedexPage,
  goToPokemonDetailPage,
  goToPokemonListPage,
} from "../../routes/coordinator";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <button onClick={() => goToPokedexPage(navigate)}>
              Ver minha Pokédex
            </button>
          </>
        );
      case "/pokedex":
        return (
          <>
            <button onClick={() => goToPokemonListPage(navigate)}>
              Voltar para lista de pokémons
            </button>
          </>
        );
      default:
        return (
          <>
            <button onClick={() => goToPokemonDetailPage(navigate)}>
              Todos pokémons
            </button>
          </>
        );
    }
  };

  return (
    <Container>
      <h1>Lista de Pokémons</h1>
      <button>Ver minha Pokédex</button>
      {showHeader()}
    </Container>
  );
};

export default Header;
