export const goToPokemonListPage = (navigate) => {
    navigate("/");
  };
  
  export const goToPokedexPage = (navigate) => {
    navigate("/pokedex");
  };
  
  export const goToPokemonDetailPage = (navigate, pokemonName) => {
    navigate(`/${pokemonName}`);
  };
  