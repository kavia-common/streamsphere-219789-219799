import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders YouTube header brand", () => {
  render(<App />);
  expect(screen.getByText("YouTube")).toBeInTheDocument();
});
