import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import games from "./games.json";
import GameCard from "./components/GameCard";
import GameScreen from "./screens/GameScreen";
import TargetCursor from "./components/TargetCursor";
import { Helmet } from "react-helmet-async";
import siteLogo from "./assets/site-logo.png";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              {/* HELMET --------- */}
              <Helmet>
                <title>Portfólio de Jogos - Fábio Santos</title>
                <meta
                  name="description"
                  content={"Confira estes jogos criado por Fábio Santos!"}
                />

                {/* OG tags */}
                <meta
                  property="og:title"
                  content="Portfólio de Jogos - Fábio Santos"
                />
                <meta
                  property="og:description"
                  content="Portfólio de Jogos - Fábio Santos"
                />
                <meta property="og:image" content={siteLogo} />
                <meta
                  property="og:url"
                  content={`https://fabiosantos.dev.br/
                  `}
                />

                {/* Favicon dinâmico */}
                <link rel="icon" type="image/png" href={siteLogo} />
              </Helmet>
              {/* HELMET --------- */}

              <h1 className="main-title">Jogos</h1>
              <TargetCursor spinDuration={2} hideDefaultCursor={true} />
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
