import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../component/utils/appStore"

it("Should be logout after clicking", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginbutton);
  const logoutbutton = screen.getByRole("button", { name: "Logout" });
  expect(loginbutton).toBeInTheDocument();
});
