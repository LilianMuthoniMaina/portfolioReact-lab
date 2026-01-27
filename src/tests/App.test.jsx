import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App component", () => {
    it("renders app title", () => {
  render(<App />);
  expect(screen.getByText(/personal project showcase app/i)).toBeInTheDocument();
});
});
