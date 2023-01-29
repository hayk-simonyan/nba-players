import { useEffect, useState } from 'react';
import { Player } from '../common/types/players';

interface SearchData {
  (text: string): Player[];
}

export const useSearch: SearchData = (text) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [requestController, setRequestController] = useState<AbortController>();

  useEffect(() => {
    if (requestController) {
      requestController.abort();
    }
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${process.env.REACT_APP_PLAYERS_API}?search=${text}`, { signal })
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data.data);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.error('Cancelled!');
        } else {
          console.error(error);
        }
      });

    setRequestController(controller);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return players;
};
