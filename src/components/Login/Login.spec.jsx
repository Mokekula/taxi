import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";

describe("Login", () => {
  it("render correctly", () => {
    const { getByLabelText } = render(<Login />);

    expect(getByLabelText("Имя пользователя*")).toHaveAttribute(
      "name",
      "username"
    );

    expect(getByLabelText("Пароль*")).toHaveAttribute("name", "password");
  });
});
