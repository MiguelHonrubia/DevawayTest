import { RaceType } from "./race";

export type PilotType = {
  _id: string;
  picture: string;
  age: number;
  name: string;
  team: string;
  races: RaceType[];
  position?: number;
  score?: number;
};

export type PilotResult = {
  _id: string;
  time: string;
  position?: number;
  score?: number;
};
