import { RaceType } from "./race";

export type PilotType = {
  _id: string;
  picture: string;
  age: number;
  name: string;
  team: string;
  races: RaceType[];
};
