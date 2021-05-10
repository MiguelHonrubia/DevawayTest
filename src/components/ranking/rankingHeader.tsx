import * as React from "react";
import { HeaderRow } from "../../styles/components/ranking/ranking";

export const RankingHeader: React.FC = ({ children }) => {
  return <HeaderRow>{children}</HeaderRow>;
};
