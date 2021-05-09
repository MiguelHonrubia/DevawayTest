import { PilotResult } from "./pilot";
import { CompetitionRaceType } from "./race";

export type RaceRanking = {
  race: CompetitionRaceType;
  pilots: PilotResult[];
};
