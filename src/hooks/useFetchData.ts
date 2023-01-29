import { useEffect, useState } from 'react';
import { Player } from '../common/types/players';

interface FetchData {
  (playersAPI: string): [
    Player[],
    React.Dispatch<React.SetStateAction<Player[]>>
  ];
}

export const useFetchData: FetchData = (playersAPI) => {
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    fetch(playersAPI)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data.data);
      });
  }, [playersAPI]);
  return [players, setPlayers];
};
