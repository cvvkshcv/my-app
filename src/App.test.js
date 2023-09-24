import { render, screen } from "@testing-library/react";
import App from "./App";

it("should ender app component and check products tabs is visible", () => {
  render(<App />);
  const step1 = screen.getByText(/Products/i);
  expect(step1).toBeInTheDocument();
});
