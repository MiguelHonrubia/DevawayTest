import * as React from "react";
import { styled } from "../../lib/styled-components/styled-components";

const HeaderRow = styled.td`
  vertical-align: middle;
  font-size: 18px;
  font-weight: 600;
  padding-left: 0.5em;
`;

export const RankingHeader: React.FC = ({ children }) => {
  return <HeaderRow>{children}</HeaderRow>;
};
