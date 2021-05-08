import * as React from "react";
import { PilotType } from "../../models/pilot";
import { CompetitionRaceType } from "../../models/race";
import { RankingHeaderContainer } from "./rankingHeaderContainer";
import { RankingHeader } from "./rankingHeader";
import { RankingDataRow } from "./rankingDataRow";
import { RankingDataRowLabel } from "./rankingDataRowLabel";
import { PositionIcon } from "../general/positionIcon";
import { styled } from "../../lib/styled-components/styled-components";

const RankingTable = styled.table`
  width: 100%;
  height: 100%;
`;

export const RankingDataTable: React.FC<{
  pilots?: PilotType[];
  competitionRaces?: CompetitionRaceType[];
}> = ({ pilots, competitionRaces }) => {
  return (
    <RankingTable>
      <RankingHeaderContainer>
        <RankingHeader>Position</RankingHeader>
        <RankingHeader>Name</RankingHeader>
        <RankingHeader>Age</RankingHeader>
        <RankingHeader>Team</RankingHeader>
        {competitionRaces &&
          competitionRaces.map(({ name }, index) => (
            <RankingHeader key={`header` + index}>{name}</RankingHeader>
          ))}
        <RankingHeader>Total score</RankingHeader>
        <RankingHeader></RankingHeader>
      </RankingHeaderContainer>
      <tbody>
        {pilots
          ? pilots.map(({ name, age, team, position, score, races }, index) => (
              <RankingDataRow
                onClick={() => console.log("click")}
                key={`row` + index}
              >
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
                {competitionRaces &&
                  races &&
                  races.map(({ name, time }, index) => (
                    <RankingDataRowLabel key={`time` + index}>
                      {time}
                    </RankingDataRowLabel>
                  ))}
                <RankingDataRowLabel>{score}</RankingDataRowLabel>
                <RankingDataRowLabel>
                  <button onClick={() => console.log("go to")}>Detail</button>
                </RankingDataRowLabel>
              </RankingDataRow>
            ))
          : "no data"}
      </tbody>
    </RankingTable>
  );
};
