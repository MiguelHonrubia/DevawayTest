import React from "react";
import { usePilotContext } from "../contexts/pilot";
import { RankingContainer } from "../styles/components/ranking/ranking";
import { RankingDataTable } from "../components/ranking/rankingDataTable";

const Home: React.FC = () => {
  const { pilots } = usePilotContext();
  return (
    <RankingContainer>
      <RankingDataTable pilots={pilots} />
    </RankingContainer>
  );
};

export default Home;
