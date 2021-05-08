import * as React from "react";
import { styled } from "../../lib/styled-components/styled-components";

const RankingDataRowItem = styled.td`
  vertical-align: middle;
  font-size: 12px;
  padding-left: 1em;
`;

export const RankingDataRowLabel: React.FC = ({ children }) => {
  return <RankingDataRowItem>{children}</RankingDataRowItem>;
};
