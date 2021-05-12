import { render, screen } from "@testing-library/react";
import { RankingHeader } from "../../../components/ranking/rankingHeader";
import "@testing-library/jest-dom";

test("RankingHeader render children", () => {
  const test = "test header";
  render(
    <table>
      <thead>
        <tr>
          <RankingHeader>{test}</RankingHeader>
        </tr>
      </thead>
    </table>
  );

  const textElement = screen.getByText(test);
  expect(textElement).toBeInTheDocument();
});
