import { styled } from "../../../lib/styled-components/styled-components";

export const RankingContainer = styled.div`
  padding: 0.5em;
  width: 99vw;
  height: 90vh;
`;

export const RankingTable = styled.table`
  width: 100%;
  height: 100%;
`;

export const HeaderRow = styled.td`
  vertical-align: middle;
  font-size: 18px;
  font-weight: 600;
  padding-left: 0.5em;
`;

export const RankingTableHeader = styled.thead`
  background-color: #999999;
  color: #ffffff;
`;

export const RankingDataRowItem = styled.td`
  vertical-align: middle;
  font-size: 12px;
  padding-left: 1em;
`;

export const RankingDataRowContainer = styled.tr<{ selected?: boolean }>`
  background-color: ${({ selected }) => (selected ? "#dedede" : "#fff9f9")};

  &:hover {
    transition: all 0.5s ease;
    background-color: #dedede;
    cursor: pointer;
  }
`;
