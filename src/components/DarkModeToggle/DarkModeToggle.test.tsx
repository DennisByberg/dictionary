import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DarkModeToggle from "./DarkModeToggle";

describe(DarkModeToggle, () => {
  it("renders component without errors", () => {
    render(<DarkModeToggle />);
  });

  it("should toggle darkmode on click", async () => {
    render(<DarkModeToggle />);

    const toggle = screen.getByRole("checkbox") as HTMLInputElement;

    expect(toggle.checked).toBe(false);

    const user = userEvent.setup();

    await user.click(toggle);

    expect(toggle.checked).toBe(true);
  });
});
