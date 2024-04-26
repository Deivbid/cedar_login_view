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

describe("<Home />", () => {
  beforeEach(() => {
    fetch.mockClear();
    toast.mockClear();
  });

  it("should display success message on successful login", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "Success" }),
    });

    render(<Home />);
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: "user1@cedar.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Login Successful",
          description: "You are now logged in!",
        })
      );
    });
  });

  it("should display error message on failed login", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Invalid credentials" }),
    });

    render(<Home />);
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Login Failed",
          description: "Please check your credentials and try again.",
        })
      );
    });
  });
});
