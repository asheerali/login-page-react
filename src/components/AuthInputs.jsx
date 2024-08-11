import { useState } from "react";
import { styled } from "styled-components";

const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const LabelStyles = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(invalid) => (invalid ? "#f87171 " : "#6b7280")};
`;

const ControlInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: #d1d5db;
  color: #374151;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="bg-gradient-to-b from-stone-700 to-stone-800 shadow-md mx-auto p-8 rounded w-full max-w-sm"
    >
      <div className="flex flex-col gap-2 mb-6">
        <p>
          <label
            invalid={emailNotValid}
            className="block mb-2 font-bold text-stone-300 text-xs uppercase tracking-wide"
          >
            Email
          </label>
          <input
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db" }}
            className="bg-stone-300 shadow px-3 py-2 border rounded w-full text-gray-700 leading-tight"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className="block mb-2 font-bold text-stone-300 text-xs uppercase tracking-wide">
            Password
          </label>
          <input
            type="password"
            // className={passwordNotValid ? "invalid" : undefined}
            className="bg-stone-300 shadow px-3 py-2 border rounded w-full text-gray-700 leading-tight"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="p-2 rounded font-semibold text-amber-400 hover:text-amber-500 uppercase">
          Create a new account
        </button>
        <button
          className="bg-amber-400 hover:bg-amber-500 px-4 py-2 rounded font-semibold text-stone-900 uppercase"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
