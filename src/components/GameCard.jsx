import "./GameCard.css";
import { useNavigate } from "react-router-dom";

export default function GameCard({ game }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game/${encodeURIComponent(game.name)}`);
  };

  return (
    <div className="game-card cursor-target" onClick={handleClick}>
      <img className="game-card__image" src={game.image} alt={game.name} />
      <h2 className="game-card__title">{game.name}</h2>
      <p className="game-card__description">jogo massa</p>
    </div>
  );
}
