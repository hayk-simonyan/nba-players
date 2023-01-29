import React, { FC, MouseEvent } from "react";
interface ButtonFavoriteProps {
  playerId: number;
  handleFavorite: (e: MouseEvent, playerId: number) => void;
  playerStatus?: boolean;
}
const ButtonFavorite: FC<ButtonFavoriteProps> = ({
  playerId,
  handleFavorite,
  playerStatus,
}) => {
  const isFavoriteClass = playerStatus
    ? "fa-solid fa-star"
    : "fa-regular fa-star";

  return (
    <i
      className={`favorite-icon ${isFavoriteClass}`}
      onClick={(event) => handleFavorite(event, playerId)}
    ></i>
  );
};

export default ButtonFavorite;
