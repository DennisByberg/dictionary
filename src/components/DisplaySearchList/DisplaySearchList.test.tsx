import { describe, test, expect, vi } from "vitest";
import { act, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { mockedWord } from "../../mockedWord"; // Mocked Word = "Hello"
import DisplaySearchList from "./DisplaySearchList";
import Searchbar from "../Searchbar/Searchbar";

describe(DisplaySearchList, async () => {
  test("Render DisplaySearchList ", () => {
    render(<DisplaySearchList wordObject={mockedWord} />);

    const word = screen.getByRole("heading", { level: 2 });

    expect(word).toBeInTheDocument();
  });
});
