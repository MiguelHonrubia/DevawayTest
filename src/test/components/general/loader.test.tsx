import React from "react";
import { render, screen } from "@testing-library/react";
import { Loader } from "../../../components/general/loader";

test("Loader component render loading text", () => {
  render(<Loader />);
  const textElement = screen.getByText("Loading...");
  expect(textElement).toBeInTheDocument();
});
