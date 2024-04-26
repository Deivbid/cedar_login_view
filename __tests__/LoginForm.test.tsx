import "@testing-library/jest-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Home from "../app/page";
import { useRouter } from "next/navigation";
import { toast } from "../components/ui/use-toast";

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

jest.mock("../components/ui/use-toast", () => ({
  toast: jest.fn(),
}));
global.fetch = jest.fn();

describe("<LoginForm />", () => {
  it("renders the login form", () => {
    render(<Home />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it("displays validation messages for empty fields", async () => {
    render(<Home />);
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    // Since we are using fireEvent, you might have to wait a bit for the state to update.
    const emailError = await screen.findByText("Invalid email format.");
    const passwordError = await screen.findByText(
      "Password must be at least 11 characters."
    );

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("displays error for invalid email format", async () => {
    render(<Home />);
    const emailInput = screen.getByLabelText(/email address/i);
    fireEvent.change(emailInput, { target: { value: "invalid-email@wrong" } });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(
      await screen.findByText(/invalid email format/i)
    ).toBeInTheDocument();
  });
});
