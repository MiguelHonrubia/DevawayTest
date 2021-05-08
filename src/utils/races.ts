import { CompetitionRaceType } from "../models/race";
import { PilotType } from "../models/pilot";

export const getCompetitionRaces = (
  pilots: PilotType[]
): CompetitionRaceType[] => {
  const competitionRaces: CompetitionRaceType[] = [];

  pilots.map((pilot) => {
    pilot.races.map(({ name }) => {
      const exists = competitionRaces.find((x) => x.name === name);

      if (!exists) {
        competitionRaces.push({ name });
      }
    });
  });

  return competitionRaces;
};
