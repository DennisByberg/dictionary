import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe(Header, () => {
  // Test 1 | Det här testet är till för att verifiera att vi lyckas hitta komponenten vi vill arbeta med, skulle vi inte klara det här testet vet jag att komponenten inte hittas och börja debugga därifrån för att hitta den.
  test("Render Header component correctly", () => {
    render(<Header />);

    const logo = screen.getByAltText("A purple logo of the site dictionary");
    const headerText = screen.getByRole("heading", { level: 1 });
    const darkModeToggle = screen.getByRole("checkbox");

    expect(logo).toBeInTheDocument();
    expect(headerText).toHaveTextContent("Dictionary");
    expect(darkModeToggle).toBeInTheDocument();
  });
});
