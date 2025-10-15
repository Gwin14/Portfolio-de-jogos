import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import games from "../games.json";
import { getReleases, getReadme } from "../services/githubServices";
import ReactMarkdown from "react-markdown"; // 👈 importa aqui

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
      .catch(() => setError("Não foi possível carregar o README ou o arquivo não existe"));
  }, [game]);

  if (!game) {
    return (
      <div>
        <h1>Jogo não encontrado</h1>
        <button onClick={() => navigate("/")}>Voltar</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
        ← Voltar
      </button>

      <h1>{game.name}</h1>
      <img
        src={game.image}
        alt={game.name}
        style={{ maxWidth: "300px", marginBottom: "20px" }}
      />

      <div>
        <h3>Links:</h3>
        <a href={game.repo} target="_blank" rel="noopener noreferrer">
          Repositório GitHub
        </a>
        <br />
        <a href={game.releases} target="_blank" rel="noopener noreferrer">
          Releases
        </a>
      </div>

      <div dangerouslySetInnerHTML={{ __html: game.widget }} />

      <div style={{ marginTop: "20px" }}>
        <h3>README:</h3>
        {error ? (
          <p>{error}</p>
        ) : readme ? (
          <ReactMarkdown>{readme}</ReactMarkdown> // 👈 aqui ele renderiza markdown
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
