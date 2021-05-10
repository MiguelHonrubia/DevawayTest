import * as React from "react";
import { RankingTableHeader } from "../../styles/components/ranking/ranking";

export const RankingHeaderContainer: React.FC = ({ children }) => {
  return (
    <RankingTableHeader>
      <tr>{children}</tr>
    </RankingTableHeader>
  );
};
