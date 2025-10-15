import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import games from "./games.json";
import GameCard from "./components/GameCard";
import GameScreen from "./screens/GameScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Jogos</h1>
              <section className="games-container">
                {games.map((game) => (
                  <GameCard key={game.name} game={game} />
                ))}
              </section>
            </main>
          }
        />
        <Route path="/game/:gameName" element={<GameScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
