import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import games from "../games.json";
import { getReadme } from "../services/githubServices";
import ReactMarkdown from "react-markdown"; // 👈 importa aqui
import TargetCursor from "../components/TargetCursor";
import "./GameScreen.css";
import GithubButton from "../components/GithubButton";
import { Helmet } from "react-helmet-async";

export default function GameScreen() {
  const { gameName } = useParams();
  const navigate = useNavigate();
  const [readme, setReadme] = useState("");
  const [error, setError] = useState("");

  const game = games.find((g) => g.name === decodeURIComponent(gameName));

  useEffect(() => {
    if (!game) return;
    getReadme(game.repo)
      .then((content) => setReadme(content))
      .catch(() =>
        setError("Não foi possível carregar o README ou o arquivo não existe")
      );
  }, [game]);

  useEffect(() => {
    // aplica a classe a todos os links (inclusive os do markdown)
    const links = document.querySelectorAll("a");
    links.forEach((el) => el.classList.add("cursor-target"));
  }, [readme]);

  useEffect(() => {
    // aplica a classe a todos os links (inclusive os do markdown)
    const iframe = document.querySelector("iframe");
    iframe.classList.add("cursor-target");
  }, []);

  if (!game) {
    return (
      <div>
        <h1>Jogo não encontrado</h1>
        <button
          className="back-button cursor-target"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="game-screen">
      <img className="game-background" src={game.image} alt={game.name} />
      <img className="game-background blur" src={game.image} alt={game.name} />

      {/* HELMET --------- */}
      <Helmet>
        <title>{game.name} – Portfólio de Jogos</title>
        <meta
          name="description"
          content={
            game.description || "Confira este jogo criado por Fábio Santos!"
          }
        />

        {/* OG tags */}
        <meta property="og:title" content={game.name} />
        <meta
          property="og:description"
          content={game.description || game.name}
        />
        <meta property="og:image" content={game.image} />
        <meta
          property="og:url"
          content={`https://fabiosantos.dev.br/${encodeURIComponent(
            game.name
          )}`}
        />

        {/* Favicon dinâmico */}
        <link rel="icon" type="image/png" href={game.image} />
      </Helmet>

      {/* HELMET --------- */}

      <button
        className="cursor-target back-button"
        onClick={() => navigate("/")}
      >
        ← Voltar
      </button>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <img className="game-image" src={game.image} alt={game.name} />

      <section className="game-content">
        <h1 className="game-title">{game.name}</h1>
        <div>
          <a
            className="cursor-target"
            href={game.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubButton />{" "}
          </a>

          <br />
          {/* <a
            className="cursor-target"
            href={game.releases}
            target="_blank"
            rel="noopener noreferrer"
          >
            Releases
          </a> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: game.widget }} />
        <div className="readme-section">
          {error ? (
            <p>{error}</p>
          ) : readme ? (
            <ReactMarkdown>{readme}</ReactMarkdown> // 👈 aqui ele renderiza markdown
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </section>
    </div>
  );
}
