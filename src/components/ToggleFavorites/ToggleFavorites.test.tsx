import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ToggleFavorites from "./ToggleFavorites";
import user from "@testing-library/user-event";

describe(ToggleFavorites, () => {
  // Test 1 | Det här testet är till för att verifiera att vi lyckas hitta komponenten vi vill arbeta med, skulle vi inte klara det här testet vet jag att komponenten inte hittas och börja debugga därifrån för att hitta den.
  test("Render ToggleFavorites component correctly", () => {
    render(
      <ToggleFavorites
        isFavoritesToggled={false}
        setIsFavoritesToggled={vi.fn()}
        setWordObject={vi.fn()}
      />
    );
    const toggle = screen.getByRole("button") as HTMLButtonElement;
    expect(toggle).toHaveTextContent("Show Favorites");
  });

  // Test 2 | Det här testet är till för att verifiera att när jag trycker på toggle anropas rätt funktioner vilket kommer hjälpa mig att fånga upp problem i framtiden.
  test("Clicking the toggle button should call the handleToggleFavorites correctly", async () => {
    user.setup();
    const mockSetIsFavoritesToggled = vi.fn();
    const mockSetWordObject = vi.fn();

    render(
      <ToggleFavorites
        isFavoritesToggled={false}
        setIsFavoritesToggled={mockSetIsFavoritesToggled}
        setWordObject={mockSetWordObject}
      />
    );

    const toggleButton = screen.getByRole("button");
    await user.click(toggleButton);

    expect(mockSetWordObject).toHaveBeenCalledOnce();
    expect(mockSetIsFavoritesToggled).toHaveBeenCalledOnce();
  });
});
