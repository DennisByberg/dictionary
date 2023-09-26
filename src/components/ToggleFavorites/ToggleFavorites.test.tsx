import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ToggleFavorites from "./ToggleFavorites";

describe(ToggleFavorites, () => {
  it("Should render without errors", () => {
    render(
      <ToggleFavorites
        isFavoritesToggled={false}
        setIsFavoritesToggled={vi.fn()}
        setWordObject={vi.fn()}
      />
    );
  });

  it("Should show the Show Favorites button", () => {
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
});
