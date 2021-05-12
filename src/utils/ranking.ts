import { CompetitionRaceType } from "../models/race";
import { PilotResult, PilotType } from "../models/pilot";
import { RaceRanking } from "../models/ranking";

export const calculateRanking = (
  pilots: PilotType[],
  competitionRaces: CompetitionRaceType[]
) => {
  const raceRanking = BuildRaceRanking(pilots, competitionRaces);
  sortRankingRace(raceRanking);
  CalculatePuntuation(raceRanking, pilots);
  sortPilotsByTotalScore(pilots);

  return raceRanking;
};

export const BuildRaceRanking = (
  pilots: PilotType[],
  competitionRaces: CompetitionRaceType[]
): RaceRanking[] => {
  const raceRanking: RaceRanking[] = [];

  competitionRaces.forEach((race) => {
    pilots.forEach((pilot) => {
      pilot.races.forEach(({ name, time }) => {
        if (race.name === name) {
          const exists = raceRanking.find((x) => x.race.name === name);

          if (!exists) {
            raceRanking.push({
              race: { name },
              pilots: [{ _id: pilot._id, time: time }],
            });
          } else {
            exists.pilots.push({ _id: pilot._id, time: time });
          }
        }
      });
    });
  });

  return raceRanking;
};

export const formatTime = (pilot: PilotResult) => {
  const hours = Number(pilot.time.split(":")[0]);
  const minutes = Number(pilot.time.split(":")[1]);
  const seconds = Number(pilot.time.split(":")[2].split(".")[0]);
  const miliseconds = Number(pilot.time.split(":")[2].split(".")[1]);
  const pilotTime = new Date().setHours(hours, minutes, seconds, miliseconds);

  return pilotTime;
};

export const CalculatePuntuation = (
  raceRanking: RaceRanking[],
  pilots: PilotType[]
) => {
  raceRanking.forEach((race) => {
    race.pilots.forEach(
      (pilot, index) =>
        (pilot.score =
          PuntuationSystem[index] !== undefined ? PuntuationSystem[index] : 0)
    );
  });

  pilots.forEach((pilot) => {
    raceRanking.forEach((race) => {
      const pilotWithScore = race.pilots.find((x) => x._id === pilot._id);
      if (pilotWithScore) {
        pilot.score = (pilot.score || 0) + (pilotWithScore.score || 0);
      }
    });
  });
};

export const sortRankingRace = (raceRanking: RaceRanking[]) => {
  raceRanking.forEach((item) => {
    item.pilots.sort((a, b) => {
      const pilotATime = formatTime(a);
      const pilotBTime = formatTime(b);

      if (pilotATime < pilotBTime) {
        return -1;
      }
      if (pilotATime > pilotBTime) {
        return 1;
      }
      return 0;
    });
  });
};

export const sortPilotsByTotalScore = (pilots: PilotType[]) => {
  pilots.sort((a, b) => {
    if ((a.score || 0) < (b.score || 0)) {
      return 1;
    }
    if ((a.score || 0) > (b.score || 0)) {
      return -1;
    }
    return 0;
  });
};

export const PuntuationSystem: { [key: number]: number } = {
  0: 25,
  1: 18,
  2: 15,
  3: 12,
  4: 10,
  5: 8,
  6: 6,
  7: 4,
  8: 2,
  9: 1,
};
