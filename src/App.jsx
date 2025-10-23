import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import games from "./games.json";
import GameCard from "./components/GameCard";
import GameScreen from "./screens/GameScreen";
import TargetCursor from "./components/TargetCursor";
import { Helmet } from "react-helmet-async";
import siteLogo from "./assets/site-logo.png";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <motion.main
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* HELMET --------- */}
              <Helmet>
                <title>Portfólio de Jogos - Fábio Santos</title>
                <meta
                  name="description"
                  content={"Confira estes jogos criados por Fábio Santos!"}
                />
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
                  content={`https://fabiosantos.dev.br/`}
                />
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
            </motion.main>
          }
        />

        {/* Página do jogo */}
        <Route
          path="/game/:gameName"
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <GameScreen />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
