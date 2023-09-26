import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Searchbar from "./Searchbar";
import userEvent from "@testing-library/user-event";

describe(Searchbar, () => {
  it("Should render searchbar", () => {
    render(<Searchbar setWordObject={vi.fn()} />);
  });

  it("Should accept a user typing", async () => {
    render(<Searchbar setWordObject={vi.fn()} />);
    const user = userEvent.setup();
    const input = screen.getByRole("textbox");

    await user.type(input, "hello");
    expect(input).toHaveValue("hello");
  });

  it("SearchInput is empty after a search...", async () => {
    render(<Searchbar setWordObject={vi.fn()} />);
    const searchBtn = screen.getByAltText("searchPNG");
    const input = screen.getByRole("textbox");
    const user = userEvent.setup();

    await user.type(input, "hello");
    expect(input).toHaveValue("hello");

    await user.click(searchBtn);

    await waitFor(() => {
      expect(input).toHaveValue("");
    });
  });
});
