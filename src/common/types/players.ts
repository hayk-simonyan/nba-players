import { MouseEvent } from "react";
export interface Player {
  id: number;
  first_name: string;
  height_feet?: string;
  height_inches?: string;
  last_name: string;
  position: string;
  team: Team;
  weight_pounds?: string;
  favorite?: boolean;
}

export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface PlayersListProps {
  players: Player[];
  handleFavorite: (e: MouseEvent, playerId: number) => void;
}
