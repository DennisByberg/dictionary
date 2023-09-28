import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockedWord } from "../../mocks/mockedWord"; // Mocked Word = "Cat"
import DisplaySearchList from "./DisplaySearchList";

import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/cat",
    (_, res, ctx) => {
      return res(ctx.json(mockedWord));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe(DisplaySearchList, () => {
  // Test 1 | Det här testet är till för att verifiera att vi lyckas hitta ordet vi sökte på.
  test("Should render the word correctly", () => {
    render(<DisplaySearchList wordObject={mockedWord} />);
    const word = screen.getByRole("heading", { level: 2 });

    expect(word).toHaveTextContent("cat");
  });

  // Test 2 | Det här testet är till för att verifiera att vi lyckas hitta phonetic av ordet vi sökte på.
  test("Should render the phonetic correctly", () => {
    render(<DisplaySearchList wordObject={mockedWord} />);
    const phonetic = screen.getByText("/kat/");

    expect(phonetic).toBeInTheDocument();
  });

  // Test 3 | Det här testet är till för att verifiera att vi lyckas få fram en stjärna som man kan favoritmarkera sitt ord.
  test("Should render the favorite star correctly", () => {
    render(<DisplaySearchList wordObject={mockedWord} />);
    const favoriteStar = screen.getByRole("img");

    expect(favoriteStar).toHaveAttribute(
      "src",
      "/src/assets/images/not-favorite-star.png"
    );
  });

  // Test 4 | Det här testet är till för att verifiera att vi får upp korrekt antal definitioner av ordet. Jag sorterar ut så man max kan få 3 per phonetic, så 6st ska vara korrekt vid sökning av cat.
  test("Should render 6 defintions (3 noun, 3 verb)", () => {
    render(<DisplaySearchList wordObject={mockedWord} />);

    const definitions = screen.getAllByText(/Definition/);

    expect(definitions).toHaveLength(6);
  });

  // Test 5 | Det här testet är till för att verifiera att vi får upp korrekt antal audio filer, vid sökning av cat ska det vara 2st.
  test("Should render 2 audio files", () => {
    render(<DisplaySearchList wordObject={mockedWord} />);

    const audioElements = screen.getAllByTestId("audio-element");

    expect(audioElements).toHaveLength(2);
  });
});
