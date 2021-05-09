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
  onPilotDetail?: (id: string) => void;
}> = ({ pilots, competitionRaces, onPilotDetail }) => {
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
      </RankingHeaderContainer>
      <tbody>
        {pilots
          ? pilots.map(
              ({ name, age, team, position, score, races, _id }, index) => (
                <RankingDataRow
                  onClick={() => onPilotDetail && onPilotDetail(_id)}
                  key={`row` + index}
                >
                  <RankingDataRowLabel>
                    {index < 3 ? (
                      <PositionIcon position={index + 1} small />
                    ) : (
                      index + 1
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
                </RankingDataRow>
              )
            )
          : "no data"}
      </tbody>
    </RankingTable>
  );
};
