import * as React from "react";
import { styled } from "../../lib/styled-components/styled-components";

const RankingDataRowContainer = styled.tr<{ selected?: boolean }>`
  background-color: ${({ selected }) => (selected ? "blue" : "#fff9f9")};
`;

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
