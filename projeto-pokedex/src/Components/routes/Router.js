import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../../Pages/PokemonListPage/PokemonListPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="*" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
