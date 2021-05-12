import { render, screen } from "@testing-library/react";
import { RankingDataRow } from "../../../components/ranking/rankingDataRow";
import { RankingDataRowLabel } from "../../../components/ranking/rankingDataRowLabel";
import "@testing-library/jest-dom";

test("RankingDataRow render children", () => {
  const test = "test row";
  const children = <RankingDataRowLabel>{test}</RankingDataRowLabel>;
  render(
    <table>
      <tbody>
        <RankingDataRow>{children}</RankingDataRow>
      </tbody>
    </table>
  );

  const textElement = screen.getByText(test);
  expect(textElement).toBeInTheDocument();
});
