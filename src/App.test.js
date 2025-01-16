import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Alba Gold System heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Alba Gold System/i); // Matches the new heading
  expect(headingElement).toBeInTheDocument();
});

test("renders Paul A Alba component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Paul A Alba/i); // Matches text in PaulAAlba component
  expect(linkElement).toBeInTheDocument();
});
