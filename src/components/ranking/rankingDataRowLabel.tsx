import * as React from "react";
import { styled } from "../../lib/styled-components/styled-components";

const RankingDataRowItem = styled.td`
  vertical-align: middle;
  margin: auto;
  font-size: 12px;
`;

export const RankingDataRowLabel: React.FC = ({ children }) => {
  return <RankingDataRowItem>{children}</RankingDataRowItem>;
};
