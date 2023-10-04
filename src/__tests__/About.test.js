import { render, screen } from "@testing-library/react";
import About from "../routes/About";

test("About renders successfully", () => {
  render(<About />);

  const element = screen.getByText(/about me/i);

  expect(element).toBeInTheDocument();
});
