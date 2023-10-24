import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Todo from "../routes/Todo";
import { MemoryRouter } from "react-router-dom";

test("renders the Todo component", () => {
  render(
    <MemoryRouter>
      <Todo />
    </MemoryRouter>
  );
  const element = screen.getByText(/todo-list/i);
  expect(element).toBeInTheDocument();
  const addButton = screen.getByText("Add");
  expect(addButton).toBeInTheDocument();
});

test("adds a new task to the list", async () => {
  render(
    <MemoryRouter>
      <Todo />
    </MemoryRouter>
  );

  const taskInput = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add");

  fireEvent.change(taskInput, { target: { value: "Test task" } });
  fireEvent.click(addButton);

  await waitFor(() => {
    const addedTask = screen.getByText("Test task");
    expect(addedTask).toBeInTheDocument();
  });
});

// test("marks a task as completed", async () => {
//   render(
//     <MemoryRouter>
//       <Todo />
//     </MemoryRouter>
//   );

//   const taskInput = screen.getByPlaceholderText("Enter a task");
//   const addButton = screen.getByText("Add");

//   fireEvent.change(taskInput, { target: { value: "Test task" } });
//   fireEvent.click(addButton);

//   await waitFor(() => {
//     const addedTask = screen.getByText("Test task");
//     expect(addedTask).toBeInTheDocument();
//   });

//   const taskCheckbox = screen.getByText("Test task").previousSibling;
//   fireEvent.click(taskCheckbox);

//   await waitFor(() => {
//     const completedTask = screen.getByText("Test task");
//     expect(completedTask).toHaveClass("completed");
//   });
// });
