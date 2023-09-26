import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe(Header, () => {
  it("should render the Header component without errors", () => {
    render(<Header />);
  });

  it("Should render the logo correctly", () => {
    render(<Header />);
    const logo = screen.getByAltText("A purple logo of the site dictionary");

    expect(logo).toBeInTheDocument();
  });

  it("Should display the correct header text", () => {
    render(<Header />);
    const headerText = screen.getByRole("heading", { level: 1 });

    expect(headerText).toHaveTextContent("Dictionary");
  });
});
