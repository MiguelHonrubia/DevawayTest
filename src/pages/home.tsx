import React from "react";
import { usePilotContext } from "../contexts/pilot";
import { RankingContainer } from "../styles/components/ranking/ranking";
import { RankingDataTable } from "../components/ranking/rankingDataTable";
import { styled } from "../lib/styled-components/styled-components";
import { useHistory } from "react-router-dom";

const TitleContainer = styled.h2``;

const Home: React.FC = () => {
  const { pilots, competitionRaces } = usePilotContext();
  const history = useHistory();

  const PilotDetail = (id: string) => {
    history.push(`/pilot/${id}`);
  };

  return (
    <RankingContainer>
      <TitleContainer>World Kart Championship</TitleContainer>
      <RankingDataTable
        pilots={pilots}
        competitionRaces={competitionRaces}
        onPilotDetail={PilotDetail}
      />
    </RankingContainer>
  );
};

export default Home;
