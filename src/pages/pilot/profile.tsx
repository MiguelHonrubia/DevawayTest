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
import { ReactComponent as ReturnArrow } from "../../assets/icons/returnArrow.svg";

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
              idSelectedPilot={id}
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
        <ReturnButton onClick={returnToRanking}>
          <ReturnArrow width={25} height={25} />
          <span style={{ marginLeft: "0.5em", fontWeight: 600, fontSize: 16 }}>
            RETURN
          </span>
        </ReturnButton>
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
                <ProfileText size="medium">TEAM {pilot.team}</ProfileText>
                <ProfileText size="medium">AGE {pilot.age}</ProfileText>
              </ProfileTextContainer>
            </PilotInfo>
            <CompetitionInfo>
              {pilot.position && pilot.position < 4 ? (
                <div style={{ marginTop: "1em", marginLeft: "0.5em" }}>
                  <PositionIcon position={pilot.position} />
                </div>
              ) : (
                <>
                  <ProfileText size="extralarge"> {pilot.position}</ProfileText>
                  <ProfileText size="medium" style={{ marginTop: "-4em" }}>
                    POSITION
                  </ProfileText>
                </>
              )}
            </CompetitionInfo>

            <CompetitionInfo>
              <ProfileText size="extralarge">{pilot.score}</ProfileText>
              <ProfileText size="medium" style={{ marginTop: "-4em" }}>
                SCORE
              </ProfileText>
            </CompetitionInfo>
          </>
        )}
      </ProfileHeader>
      <ProfileContent>{getProfileContentComponent()}</ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
