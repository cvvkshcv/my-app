import { render, screen } from "@testing-library/react";
import Billing from "../Billing";
import { useUser } from "../../store/useUser";

jest.mock("../../store/useUser", () => () => ({
  fetchUserDetail: () => null,
  setUserInfo: {},
  isSubmitSuccess: true,
  isSubmitting: false,
  loading: false,
  userInfo: {},
  error: null,
}));
test("Render billing component", () => {
  render(<Billing />);
  // const step1 = screen.getByText(/Products/i);
  // expect(step1).toBeInTheDocument();
});
