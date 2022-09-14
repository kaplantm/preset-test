import { render, RenderOptions, screen } from "@testing-library/react";
import Foo from "./Foo";

describe("Foo", () => {
  test("Foo is created", () => {
    render(<Foo />);
    expect(screen.getByText("Foo")).toBeInTheDocument();
  });
});