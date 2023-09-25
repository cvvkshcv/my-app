import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Billing from "../Billing";
import { useUser } from "../../store/useUser";

jest.mock("../../store/useUser", () => ({
  useUser: () => ({
    fetchUserDetail: () => null,
    setUserInfo: {},
    isSubmitSuccess: true,
    isSubmitting: false,
    loading: false,
    userInfo: {
      username: "Test",
      email: "minnal@email",
      phone: "testttphone",
      address: {
        number: "1234",
        city: "bangalore",
        zipcode: "560076",
        street: "theru",
      },
    },
    error: null,
  }),
}));

test.only("Render billing component", () => {
  render(<Billing />);
  // const step1 = screen.getByText(/Products/i);
  // expect(step1).toBeInTheDocument();
});
