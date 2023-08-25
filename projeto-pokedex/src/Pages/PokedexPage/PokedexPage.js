import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container } from "./pokedexPageStyle";
import Header from "../../Components/Header/Header";

function PokedexPage(props) {
  const { pokedex, removeFromPokedex } = props;

  return (
    <Container>
      <Header />
      <div>
        {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </div>
    </Container>
  );
}

export default PokedexPage;
