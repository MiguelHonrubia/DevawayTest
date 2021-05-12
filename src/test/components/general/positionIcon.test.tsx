import { render, screen } from "@testing-library/react";
import { PositionIcon } from "../../../components/general/positionIcon";
import "@testing-library/jest-dom";

test("position icon render gold trophy", () => {
  render(<PositionIcon position={1} />);
  const icon = screen.getByText("goldTrophy.svg");
  expect(icon).toBeInTheDocument();
});

test("position icon render silver trophy", () => {
  render(<PositionIcon position={2} />);
  const icon = screen.getByText("silverTrophy.svg");
  expect(icon).toBeInTheDocument();
});

test("position icon render bronce trophy", () => {
  render(<PositionIcon position={3} />);
  const icon = screen.getByText("bronceTrophy.svg");
  expect(icon).toBeInTheDocument();
});
