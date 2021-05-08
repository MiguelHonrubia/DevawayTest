import React from "react";
import { usePilotContext } from "../contexts/pilot";
import { RankingContainer } from "../styles/components/ranking/ranking";
import { RankingDataTable } from "../components/ranking/rankingDataTable";
import { styled } from "../lib/styled-components/styled-components";

const TitleContainer = styled.div`
  display: inline;
`;

const Home: React.FC = () => {
  const { pilots, competitionRaces } = usePilotContext();
  return (
    <RankingContainer>
      <TitleContainer>
        <h2>World Kart Championship</h2>
        <button>prueba</button>
      </TitleContainer>

      <RankingDataTable pilots={pilots} competitionRaces={competitionRaces} />
    </RankingContainer>
  );
};

export default Home;
