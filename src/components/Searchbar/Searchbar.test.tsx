import { describe, test, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Searchbar from "./Searchbar";
import user from "@testing-library/user-event";

describe(Searchbar, () => {
  // Test 1 | Det här testet är till för att verifiera att vi lyckas hitta komponenten vi vill arbeta med, skulle vi inte klara det här testet vet jag att komponenten inte hittas och börja debugga därifrån för att hitta den.
  test("Renders the Searchbar component correctly", () => {
    render(<Searchbar setWordObject={vi.fn()} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  // Test 2 | Det här testet är till för att verifiera att handleSearch funktionen kallas på rätt när vi söker på ett ord, skulle inget hända när vi söker efter ett ord lär det här testet faila och vi vet exakt vart vi ska gå och debugga.
  test("SetWordObject is called one time if we search", async () => {
    user.setup();
    const mockSetWordObject = vi.fn();

    render(<Searchbar setWordObject={mockSetWordObject} />);

    const searchBtn = screen.getByAltText("searchPNG");

    await user.click(searchBtn);

    await waitFor(() => {
      expect(mockSetWordObject).toHaveBeenCalledTimes(1);
    });
  });

  // Test 3 | Det här testet är till för att verifiera att det funkar att skriva i input-fältet och att setSearchInput funktionen fungerar korrekt, när vi söker efter ett ord ska fältet återställas till "". Skulle det inte göra det kommer detta testet att faila och vi vet att setSearchInput funktionen är trasig.
  test("Should accept a user typing and then clear input field after search", async () => {
    user.setup();
    render(<Searchbar setWordObject={vi.fn()} />);
    const input = screen.getByRole("textbox");
    const searchBtn = screen.getByAltText("searchPNG");

    await user.type(input, "hello");

    expect(input).toHaveValue("hello");

    await user.click(searchBtn);

    await waitFor(() => {
      expect(input).toHaveValue("");
    });
  });
});
