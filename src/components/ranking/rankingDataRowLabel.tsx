import * as React from "react";
import { RankingDataRowItem } from "../../styles/components/ranking/ranking";

export const RankingDataRowLabel: React.FC = ({ children }) => {
  return <RankingDataRowItem>{children}</RankingDataRowItem>;
};
