import React, { FC } from "react";
import { PlayersListProps } from "../../common/types/players";
import PlayerItem from "../player-item/player-item.component";

import "./favorite-list.css";

const FavoriteList: FC<PlayersListProps> = ({ players, handleFavorite }) => {
  return (
    <div className="favorite-list">
      {players.map((player) => (
        <PlayerItem
          key={player.id}
          handleFavorite={handleFavorite}
          player={player}
        />
      ))}
    </div>
  );
};

export default FavoriteList;
