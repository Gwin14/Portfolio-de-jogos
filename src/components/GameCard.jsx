import "./GameCard.css";
import { useNavigate } from "react-router-dom";

export default function GameCard({ game }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game/${encodeURIComponent(game.name)}`);
  };

  return (
    <div
      className="game-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <h2 className="game-card__title">{game.name}</h2>
      <img className="game-card__image" src={game.image} alt={game.name} />
    </div>
  );
}
