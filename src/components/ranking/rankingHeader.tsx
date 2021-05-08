import * as React from "react";
import { styled } from "../../lib/styled-components/styled-components";

const HeaderRow = styled.td`
  vertical-align: middle;
  margin: auto;
  font-size: 14px;
`;

export const RankingHeader: React.FC = ({ children }) => {
  return <HeaderRow>{children}</HeaderRow>;
};
