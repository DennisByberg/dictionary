import { describe, test, expect, vi, beforeAll, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import DisplayFavorites from "./DisplayFavorites";
import { FavoriteWord } from "../../context/FavoriteWordContextProvider";
import { setupServer } from "msw/node";
import { rest } from "msw";
import mockedFavorite from "../../mocks/mockedFavorite"; // Mocked Favorite = Cat
import mockedFavorites from "../../mocks/mockedFavorites"; // Mocked Favorites = Cat & Dog
import user from "@testing-library/user-event";

const server = setupServer(
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/cat",
    (_, res, ctx) => {
      return res(ctx.json(mockedFavorite));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

// Test 1 | Det här testet är till för att verifiera att vi lyckas hitta favoritordet vi har i våran provider
describe(DisplayFavorites, () => {
  test("Should render my favoriteList with 1 favorite", () => {
    render(
      <FavoriteWord.Provider
        value={{
          favoritedWord: mockedFavorite,
          dispatch: vi.fn(),
        }}
      >
        <DisplayFavorites />
      </FavoriteWord.Provider>
    );

    const favoritesText = screen.getByRole("heading", { level: 3 });
    expect(favoritesText).toHaveTextContent("Favorites");

    const favWord = screen.getByRole("heading", { level: 2 });
    const phonetic = screen.getByText("/kat/");
    const definitions = screen.getAllByText(/Definition/);
    const audioElements = screen.getAllByTestId("audio-element");
    const deleteBtn = screen.getByRole("img");

    expect(favWord).toHaveTextContent("cat");
    expect(phonetic).toBeInTheDocument();
    expect(definitions).toHaveLength(6);
    expect(audioElements).toHaveLength(2);
    expect(deleteBtn).toHaveAttribute("src", "/src/assets/images/delete.png");
  });

  // Test 2 | Det här testet är till för att verifiera att vi får upp ett error meddelande om vi inte har något favoritord sparat
  test("Should render error message if no favorite word are provided", () => {
    render(
      <FavoriteWord.Provider
        value={{
          favoritedWord: [],
          dispatch: vi.fn(),
        }}
      >
        <DisplayFavorites />
      </FavoriteWord.Provider>
    );

    const errorMsg = screen.getByText("No favorites at the moment...");

    expect(errorMsg).toBeInTheDocument();
  });

  // Test 3 | Det här testet är till för att verifiera att vi har lyckats rendera två stycken favoriter
  test("Should render 2 favorite words if we have 2 favorites", async () => {
    user.setup();
    render(
      <FavoriteWord.Provider
        value={{
          favoritedWord: mockedFavorites,
          dispatch: vi.fn(),
        }}
      >
        <DisplayFavorites />
      </FavoriteWord.Provider>
    );

    const favoriteWords = screen.getAllByRole("heading", { level: 2 });
    expect(favoriteWords).toHaveLength(2);
  });
});
