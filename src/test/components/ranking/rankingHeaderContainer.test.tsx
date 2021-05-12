import { render, screen } from "@testing-library/react";
import { RankingHeader } from "../../../components/ranking/rankingHeader";
import { RankingHeaderContainer } from "../../../components/ranking/rankingHeaderContainer";
import "@testing-library/jest-dom";

test("RankingHeaderContainer render children", () => {
  const test = "header test";
  const children = <RankingHeader>{test}</RankingHeader>;
  render(
    <table>
      <RankingHeaderContainer>{children}</RankingHeaderContainer>
    </table>
  );

  const textElement = screen.getByText(test);
  expect(textElement).toBeInTheDocument();
});
