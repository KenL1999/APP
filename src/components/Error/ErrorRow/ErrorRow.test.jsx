// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorRow from "./ErrorRow";
import userEvent from "@testing-library/user-event";

describe("Pruebas en el ErrorRow", () => {
  it("Uso del buton Retry", async () => {
    const user = userEvent.setup();
    const retryOnClick = vi.fn();
    render(
      <ErrorRow
        data={{
          name: "test",
          email: "test",
          age: 1,
        }}
        detail={{
          name: null,
          email: "mensaje error",
          age: "mensaje error",
        }}
        row={1}
        handleRetry={retryOnClick}
      />
    );
    await user.click(screen.getByText("Retry"));
    expect(retryOnClick).toHaveBeenCalledTimes(1);
  });
  it("Poder ingresar texto en la casilla name", async () => {
    const user = userEvent.setup();
    render(
      <ErrorRow
        data={{
          name: "testName",
          email: "testEmail",
          age: "1",
        }}
        detail={{
          name: null,
          email: "mensaje error",
          age: "mensaje error",
        }}
      />
    );
    await user.type(screen.getByDisplayValue("testName"), "other");

    expect(screen.getByDisplayValue("testNameother")).toBeInTheDocument();
  });
  it("Poder ingresar texto en la casilla email", async () => {
    const user = userEvent.setup();
    render(
      <ErrorRow
        data={{
          name: "testName",
          email: "testEmail",
          age: "1",
        }}
        detail={{
          name: "mensaje error",
          email: "mensaje error",
          age: "mensaje error",
        }}
      />
    );
    await user.type(screen.getByDisplayValue("testEmail"), "other");

    expect(screen.getByDisplayValue("testEmailother")).toBeInTheDocument();
  });
  it("Poder ingresar texto en la casilla age", async () => {
    const user = userEvent.setup();
    render(
      <ErrorRow
        data={{
          name: "testName",
          email: "testEmail",
          age: "1",
        }}
        detail={{
          name: null,
          email: null,
          age: null,
        }}
      />
    );
    await user.type(screen.getByDisplayValue("1"), "2");

    expect(screen.getByDisplayValue("12")).toBeInTheDocument();
  });
});