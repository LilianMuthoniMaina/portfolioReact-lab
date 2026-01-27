import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, vi} from "vitest";
import SearchBar from "../portfoliocomponents/SearchBar";


describe("SearchBar component", () => {
test("renders search input", () => {
  
  const setSearchTerm = vi.fn();
  
  render(<SearchBar searchTerm="" setSearchTerm={setSearchTerm} />);
const input = screen.getByPlaceholderText(/search projects/i);
  expect(input).toBeInTheDocument();

})


test("updates search term on input change", () => {
  const setSearchTerm = vi.fn(); 
  render(<SearchBar searchTerm="" setSearchTerm={setSearchTerm} />);

  const input = screen.getByPlaceholderText(/search projects/i);
fireEvent.change(input, {target: {value: "React"}});
 
expect(setSearchTerm).toHaveBeenCalledWith("React");
});

})