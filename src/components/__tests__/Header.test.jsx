import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../ReduxStore/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header Component with a Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("should render Header Component with a cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0)");

  expect(cartItems).toBeInTheDocument();
});

it("should render Header Component with a cart with any number of items in it", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // using regex simply to just find "Cart"
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("checks login button functionality login <-> logout (vice-versa)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // using regex simply to just find "Cart"
  const logInBtn = screen.getByRole("button", {name: "Login"});
  
  fireEvent.click(logInBtn);
  
  const logOutBtn = screen.getByRole("button", {name: "Logout"});
  expect(logOutBtn).toBeInTheDocument();
});
