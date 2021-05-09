import React from "react";
import { RaceRanking } from "../../models/ranking";
import { PilotResult } from "../../models/pilot";
import {
  ProfileText,
  ProfileTextContainer,
  RaceDetailContainer,
  RaceDetailCard,
} from "../../styles/components/pilot/profile";
import { formatTime } from "../../utils/time";
import { ReactComponent as RaceIcon } from "../../assets/icons/race.svg";
import { ReactComponent as TimeIcon } from "../../assets/icons/time.svg";
import { PositionIcon } from "../../components/general/positionIcon";

export const PilotRaceDetail: React.FC<{
  raceRanking: RaceRanking[];
  showTimes?: boolean;
  idPilot: string;
}> = ({ raceRanking, showTimes, idPilot }) => {
  const numRaces = raceRanking.length / 2;

  const getRaceInfo = (pilots: PilotResult[]) => {
    const index = pilots.findIndex((pilot) => pilot._id === idPilot);
    if (index !== -1) {
      return showTimes ? formatTime(pilots[index].time) : index + 1;
    }
  };

  return (
    <>
      <RaceDetailContainer>
        {raceRanking.map(({ race, pilots }, index) => {
          if (index < numRaces) {
            return (
              <RaceDetailCard>
                <ProfileTextContainer>
                  <ProfileText size="large">
                    <RaceIcon height={30} width={30} />
                    {race.name}
                  </ProfileText>
                  <ProfileText size="large">
                    {showTimes && <TimeIcon width={30} height={30} />}
                    {getRaceInfo(pilots)}
                  </ProfileText>
                </ProfileTextContainer>
              </RaceDetailCard>
            );
          }
        })}
      </RaceDetailContainer>
      <RaceDetailContainer>
        {raceRanking.map(({ race, pilots }, index) => {
          if (index >= numRaces) {
            return (
              <RaceDetailCard>
                <ProfileTextContainer>
                  <ProfileText size="large">
                    <RaceIcon height={30} width={30} />
                    {race.name}
                  </ProfileText>
                  <ProfileText size="large">
                    {showTimes && <TimeIcon width={30} height={30} />}
                    {getRaceInfo(pilots)}
                  </ProfileText>
                </ProfileTextContainer>
              </RaceDetailCard>
            );
          }
        })}
      </RaceDetailContainer>
    </>
  );
};
