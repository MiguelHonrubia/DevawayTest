import * as React from "react";
import { PilotType } from "../../models/pilot";
import { RankingHeaderContainer } from "./rankingHeaderContainer";
import { RankingHeader } from "./rankingHeader";
import { RankingDataRow } from "./rankingDataRow";
import { RankingDataRowLabel } from "./rankingDataRowLabel";
import { PositionIcon } from "../general/positionIcon";
import { styled } from "../../lib/styled-components/styled-components";

const RankingTable = styled.table`
  width: 100%;
`;

export const RankingDataTable: React.FC<{ pilots: PilotType[] }> = ({
  pilots,
}) => {
  return (
    <RankingTable>
      <RankingHeaderContainer>
        <RankingHeader>Position</RankingHeader>
        <RankingHeader>Name</RankingHeader>
        <RankingHeader>Age</RankingHeader>
        <RankingHeader>Team</RankingHeader>
        <RankingHeader>Total score</RankingHeader>
      </RankingHeaderContainer>
      <tbody>
        {pilots
          ? pilots.map(({ name, age, team, position, score, races }, index) => (
              <RankingDataRow onClick={() => console.log("click")} key={index}>
                <RankingDataRowLabel>
                  {position && position < 4 ? (
                    <PositionIcon position={position} />
                  ) : (
                    position
                  )}
                </RankingDataRowLabel>
                <RankingDataRowLabel>{name}</RankingDataRowLabel>
                <RankingDataRowLabel>{age}</RankingDataRowLabel>
                <RankingDataRowLabel>{team}</RankingDataRowLabel>
                <RankingDataRowLabel>{score}</RankingDataRowLabel>
              </RankingDataRow>
            ))
          : "no data"}
      </tbody>
    </RankingTable>
  );
};
