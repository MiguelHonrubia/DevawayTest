import React from "react";
import { usePilotContext } from "../../contexts/pilot";
import { useHistory, useParams } from "react-router-dom";
import { PilotType } from "../../models/pilot";
import { RankingDataTable } from "../../components/ranking/rankingDataTable";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileHeaderNavigation,
  ReturnButton,
  ProfileImg,
  PilotInfo,
  CompetitionInfo,
  ProfileText,
  ProfileTextContainer,
  ProfileContent,
} from "../../styles/components/pilot/profile";
import { PositionIcon } from "../../components/general/positionIcon";
import { PilotRaceDetail } from "../../components/pilot/pilotRankingtDetail";

const Profile: React.FC = () => {
  const history = useHistory();
  const {
    fetchPilotWithCompetitionDetails,
    pilots,
    competitionRaces,
    racesRanking,
  } = usePilotContext();
  const { id } = useParams<{ id: string }>();
  const [pilot, setPilot] = React.useState<PilotType | null>(null);
  //const [interval, setInterval] = React.useState<number>();
  const [contentType, setContentType] = React.useState<
    "ranking" | "times" | "positions"
  >("ranking");

  const returnToRanking = () => {
    history.goBack();
  };

  let interval: number;
  const initInterval = () => {
    interval = window.setInterval(() => {
      setContentType((contentType) =>
        contentType === "ranking"
          ? "times"
          : contentType === "times"
          ? "positions"
          : "ranking"
      );
    }, 5000);
    return () => window.clearInterval(interval);
  };

  React.useEffect(() => {
    if (pilots && pilots.length > 0) {
      const pilotAux = fetchPilotWithCompetitionDetails(id);
      if (pilotAux) {
        setPilot(pilotAux);
      }
      initInterval();
    }
  }, [id]);

  const getProfileContentComponent = () => {
    switch (contentType) {
      case "ranking":
        return (
          <>
            <ProfileText size="large">
              World Kart Championship ranking
            </ProfileText>
            <RankingDataTable
              pilots={pilots}
              competitionRaces={competitionRaces}
            />
          </>
        );
      case "times":
        return (
          <>
            <ProfileText size="large">Times</ProfileText>
            <PilotRaceDetail
              idPilot={id}
              raceRanking={racesRanking}
              showTimes
            />
          </>
        );
      case "positions":
        return (
          <>
            <ProfileText size="large">Positions</ProfileText>
            <PilotRaceDetail raceRanking={racesRanking} idPilot={id} />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <ProfileContainer>
      <ProfileHeaderNavigation>
        <ReturnButton onClick={returnToRanking}>volver</ReturnButton>
      </ProfileHeaderNavigation>
      <ProfileHeader>
        {pilot && (
          <>
            <PilotInfo>
              <ProfileImg
                src={pilot ? pilot.picture : undefined}
                alt="Pilot picture"
              ></ProfileImg>
              <ProfileTextContainer>
                <ProfileText size="large">{pilot.name}</ProfileText>
                <ProfileText size="medium">{pilot.team}</ProfileText>
                <ProfileText size="medium">{pilot.age}</ProfileText>
              </ProfileTextContainer>
            </PilotInfo>
            <CompetitionInfo>
              {pilot.position && pilot.position < 4 ? (
                <PositionIcon position={pilot.position} />
              ) : (
                <>
                  <ProfileText size="large"> {pilot.position}</ProfileText>
                  <ProfileText size="medium">POSITION</ProfileText>
                </>
              )}
            </CompetitionInfo>

            <CompetitionInfo>
              <ProfileText size="large">{pilot.score}</ProfileText>
              <ProfileText size="medium">SCORE</ProfileText>
            </CompetitionInfo>
          </>
        )}
      </ProfileHeader>
      <ProfileContent>{getProfileContentComponent()}</ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
