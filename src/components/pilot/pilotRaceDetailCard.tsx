import React from "react";
import {
  ProfileText,
  ProfileTextContainer,
  RaceDetailCard,
} from "../../styles/components/pilot/profile";
import { formatTime } from "../../utils/time";
import { ReactComponent as RaceIcon } from "../../assets/icons/race.svg";
import { ReactComponent as TimeIcon } from "../../assets/icons/time.svg";
import { PositionIcon } from "../../components/general/positionIcon";
import { RaceRanking } from "../../models/ranking";
import { PilotResult } from "../../models/pilot";

export const PilotRaceDetailCard: React.FC<{
  raceRanking: RaceRanking;
  showTime: boolean;
  idPilot: string;
}> = ({ raceRanking, showTime, idPilot }) => {
  const getRaceInfo = (pilots: PilotResult[]) => {
    const index = pilots.findIndex((pilot) => pilot._id === idPilot);
    if (index !== -1) {
      return showTime ? formatTime(pilots[index].time) : index + 1;
    }
  };

  const raceInfo = getRaceInfo(raceRanking.pilots);

  return (
    <RaceDetailCard>
      <ProfileTextContainer>
        <div
          style={{
            display: "flex",
          }}
        >
          <RaceIcon height={25} width={25} />
          <ProfileText
            size="large"
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <span style={{ marginLeft: "0.25em" }}>
              {raceRanking.race.name}
            </span>
          </ProfileText>
        </div>
      </ProfileTextContainer>
      <ProfileTextContainer>
        <div style={{ display: "flex" }}>
          {showTime && <TimeIcon width={25} height={25} />}
          {!showTime && raceInfo && raceInfo < 4 ? (
            <PositionIcon position={Number(raceInfo)} />
          ) : (
            <ProfileText
              size={showTime ? "medium" : "extralarge"}
              style={{
                alignItems: "center",
                display: "flex",
                marginLeft: "0.25em",
              }}
            >
              {raceInfo}
            </ProfileText>
          )}
        </div>
      </ProfileTextContainer>
    </RaceDetailCard>
  );
};
