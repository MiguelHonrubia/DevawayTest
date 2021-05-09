import React from "react";
import { usePilotContext } from "../contexts/pilot";
import { RankingContainer } from "../styles/components/ranking/ranking";
import { RankingDataTable } from "../components/ranking/rankingDataTable";
import { styled } from "../lib/styled-components/styled-components";

const TitleContainer = styled.h2``;

const Home: React.FC = () => {
  const { pilots, competitionRaces } = usePilotContext();

  return (
    <RankingContainer>
      <TitleContainer>World Kart Championship</TitleContainer>
      <RankingDataTable pilots={pilots} competitionRaces={competitionRaces} />
    </RankingContainer>
  );
};

export default Home;
