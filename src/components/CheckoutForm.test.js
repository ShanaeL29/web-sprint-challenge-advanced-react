import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstNameInput = screen.getByLabelText(/first name:/i);
  userEvent.type(firstNameInput, "Shanae");

  const lastNameInput = screen.getByLabelText(/last name:/i);
  userEvent.type(lastNameInput, "Leslie");

  const addressInput = screen.getByLabelText(/address:/i);
  userEvent.type(addressInput, "123 River Street");

  const cityInput = screen.getByLabelText(/city:/i);
  userEvent.type(cityInput, "Stockbridge");

  const stateInput = screen.getByLabelText(/state:/i);
  userEvent.type(stateInput, "Ga");

  const zipInput = screen.getByLabelText(/zip:/i);
  userEvent.type(zipInput, "30281");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const successMessage = screen.getByTestId("successMessage");
  expect(successMessage).toBeInTheDocument();
});
