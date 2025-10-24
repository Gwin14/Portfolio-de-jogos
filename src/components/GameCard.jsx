import "./GameCard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function GameCard({ game }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate(`/game/${encodeURIComponent(game.name)}`);
  };

  return (
    <div
      className="game-card cursor-target"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div>
          <img className="game-background" src={game.image} alt={game.name} />
          <img
            className="game-background blur"
            src={game.image}
            alt={game.name}
          />
        </div>
      )}
      <img className="game-card__image" src={game.image} alt={game.name} />
      <h2 className="game-card__title">{game.name}</h2>
      <p className="game-card__description">{game.description}</p>
    </div>
  );
}
