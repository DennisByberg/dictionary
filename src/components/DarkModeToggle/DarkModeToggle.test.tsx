import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DarkModeToggle from "./DarkModeToggle";

describe(DarkModeToggle, () => {
  // Test 1 | Det här testet är till för att verifiera att vi lyckas hitta komponenten vi vill arbeta med, skulle vi inte klara det här testet vet jag att komponenten inte hittas och börja debugga därifrån för att hitta den.
  test("Render DarkModeToggle component correctly", () => {
    render(<DarkModeToggle />);

    const toggle = screen.getByRole("checkbox");

    expect(toggle).toBeInTheDocument();
  });

  // Test 2 | Det här testet är till för att verifiera att när man trycker på darkModeToggle så förändras booleanen till det motsattsa. Detta kommer vara nödvändigt om jag märker att darkMode slutar fungera.
  test("should toggle darkmode on click", async () => {
    user.setup();
    render(<DarkModeToggle />);

    const toggle = screen.getByRole("checkbox") as HTMLInputElement;

    expect(toggle.checked).toBe(false);

    await user.click(toggle);

    expect(toggle.checked).toBe(true);
  });
});
