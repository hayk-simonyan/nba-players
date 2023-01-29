import { Player } from "../../common/types/players";

export const searchPlayers = (
  players: Player[],
  searchText: string
): Player[] => {
  return players.filter((player) => {
    return (
      player.first_name.toLowerCase().startsWith(searchText.toLowerCase()) ||
      player.last_name.toLowerCase().startsWith(searchText.toLowerCase())
    );
  });
};
