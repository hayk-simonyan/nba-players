import React, { FC, useState } from 'react';
import { Player, PlayersListProps } from '../../common/types/players';
import { useSearch } from '../../hooks/useSearch';
import ColorPicker from '../color-picker/color-picker.component';
import PlayerItem from '../player-item/player-item.component';
import SearchBox from '../search-box/search-box.component';

import './players-list.css';

const PlayersList: FC<PlayersListProps> = ({ handleFavorite }) => {
  const [searchText, setSearchText] = useState('');
  const [background, setBackground] = useState('#ffffff');
  let filteredPlayers = useSearch(searchText);

  return (
    <div className='players-box'>
      <SearchBox setSearchText={setSearchText} />
      <ColorPicker setBackground={setBackground} />
      <div className='players-list' style={{ background: background }}>
        {filteredPlayers.map((player: Player) => (
          <PlayerItem
            key={player.id}
            handleFavorite={handleFavorite}
            player={player}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
