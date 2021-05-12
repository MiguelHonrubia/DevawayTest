import { render, screen } from "@testing-library/react";
import { RankingDataRowLabel } from "../../../components/ranking/rankingDataRowLabel";
import "@testing-library/jest-dom";

test("RankingDataRowLabel render children", () => {
  const test = "test label";
  render(
    <table>
      <tbody>
        <tr>
          <RankingDataRowLabel>{test}</RankingDataRowLabel>
        </tr>
      </tbody>
    </table>
  );

  const textElement = screen.getByText(test);
  expect(textElement).toBeInTheDocument();
});
