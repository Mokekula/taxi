import React from "react";
import { Registration } from "./Registration";
import { render } from "@testing-library/react";

describe("Registration", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Registration />);

    expect(getByLabelText("Адрес электронной почты")).toHaveAttribute(
      "name",
      "email"
    );

    expect(getByLabelText("Имя")).toHaveAttribute("name", "firstname");

    expect(getByLabelText("Фамилия")).toHaveAttribute("name", "surname");

    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
  });
});
