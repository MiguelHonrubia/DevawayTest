import React from "react";
import { RaceRanking } from "../../models/ranking";
import { PilotRaceDetailCard } from "./pilotRaceDetailCard";

import { RaceDetailContainer } from "../../styles/components/pilot/profile";

export const PilotRaceDetail: React.FC<{
  raceRanking: RaceRanking[];
  showTimes?: boolean;
  idPilot: string;
}> = ({ raceRanking, showTimes, idPilot }) => {
  return (
    <>
      <RaceDetailContainer>
        {raceRanking.map((raceRanking, index) => {
          if (index < 5) {
            return (
              <PilotRaceDetailCard
                idPilot={idPilot}
                raceRanking={raceRanking}
                showTime={showTimes ? showTimes : false}
              />
            );
          }
        })}
      </RaceDetailContainer>
      <RaceDetailContainer>
        {raceRanking.map((raceRanking, index) => {
          if (index >= 5) {
            return (
              <PilotRaceDetailCard
                idPilot={idPilot}
                raceRanking={raceRanking}
                showTime={showTimes ? showTimes : false}
              />
            );
          }
        })}
      </RaceDetailContainer>
    </>
  );
};
