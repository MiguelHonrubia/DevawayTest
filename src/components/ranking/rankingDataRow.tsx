import * as React from "react";
import { RankingDataRowContainer } from "../../styles/components/ranking/ranking";

export const RankingDataRow: React.FC<{
  onClick?: any;
  selected?: boolean;
}> = ({ children, onClick, selected }) => {
  return (
    <RankingDataRowContainer onClick={onClick} selected={selected}>
      {children}
    </RankingDataRowContainer>
  );
};
