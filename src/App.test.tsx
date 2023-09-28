import { App } from "./App";

import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe(App, () => {
  // Test 1 | Det här testet är till för att verifiera att vi får upp ett error meddelande om vi söker med en tom input för att förhindra ev. buggar vid undefined som input.
  test("Should display an error message if we search with an empty input field", async () => {
    user.setup();
    render(<App />);

    const searchBtn = screen.getByAltText("searchPNG");
    await user.click(searchBtn);

    const errorMsg = await screen.findByText(
      "Sorry pal, we couldn't find definitions for the word you were looking for."
    );

    expect(errorMsg).toBeInTheDocument();
  });

  // Test 2 | Det här testet är till för att verifiera att vi får upp ett error meddelande om vi söker men att ordet inte finns.
  test("Should display an error message if we dont cant find a word", async () => {
    user.setup();
    render(<App />);

    const input = screen.getByRole("textbox");
    const searchBtn = screen.getByAltText("searchPNG");

    await user.type(input, "aaaaaazxxx");
    await user.click(searchBtn);

    const errorMsg = await screen.findByText(
      "Sorry pal, we couldn't find definitions for the word you were looking for."
    );

    expect(errorMsg).toBeInTheDocument();
  });
});
