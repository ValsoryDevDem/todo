import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Add task", async () => {
  render(<App />);

  const inputField = screen.getByPlaceholderText(
    "What to add to the to-do list?"
  );

  fireEvent.change(inputField, { target: { value: "New task" } });
  fireEvent.click(screen.getByText("Add"));

  await waitFor(() => {
    expect(screen.getByText("New task")).toBeInTheDocument();
  });
});


test("Remove task", async () => {
  render(<App />);

  const inputField = screen.getByPlaceholderText(
    "What to add to the to-do list?"
  );

  userEvent.type(inputField, "New task");

  userEvent.click(screen.getByText("Add"));

  screen.debug();

  await waitFor(() => {
    expect(screen.queryByText("New task")).toBeNull();
  });
});
