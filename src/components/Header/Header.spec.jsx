import React from "react";
import { Header } from "./Header";
import { render, fireEvent } from "@testing-library/react";
import { Registration } from "../Registration/Registration";

jest.mock("../../Profile/Profile", () => {
  {
    Profile: () => <div>Profile component</div>;
  }
});
jest.mock("../Login/Login", () => {
  {
    Login: () => <div>Login component</div>;
  }
});
jest.mock("../Map/Map", () => {
  {
    Map: () => <div>Map component</div>;
  }
});
jest.mock("../Registration/Registratin", () => {
  {
    Registration: () => <div>Registratin component</div>;
  }
});

describe("Header", () => {
  it.todo("render correctly", () => {
    const { container } = render(<Map />);
  });

  describe("when clicked on menu buttons", () => {
    it.todo("opened the correct page", () => {
      const { getByText, container } = render(<Map />);

      fireEvent.click(getByText("Profile"));
      expect(container.innerHTML).toMatch("Profile component");
    });
  });
});
