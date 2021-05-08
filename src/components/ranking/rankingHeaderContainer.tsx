import * as React from "react";
import { styled } from "../../lib/styled-components/styled-components";

const RankingTableHeader = styled.thead`
  background-color: #999999;
  color: #ffffff;
`;

export const RankingHeaderContainer: React.FC = ({ children }) => {
  return (
    <RankingTableHeader>
      <tr>{children}</tr>
    </RankingTableHeader>
  );
};
