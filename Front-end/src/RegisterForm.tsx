import axios from "axios";
import { useState } from "react";

function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [userHandle, setUserHandle] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleUserHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserHandle(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const registrationData = {
      name: fullName,
      username: userHandle,
      email: emailAddress,
      password: userPassword,
    };

    axios
      .post("http://localhost:3000/users/create-user", registrationData)
      .then(() => {
        alert("Registration completed successfully!");
        // Clear form after successful registration
        setFullName("");
        setUserHandle("");
        setEmailAddress("");
        setUserPassword("");
      })
      .catch((error: any) => {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <div>
      <h2>Create New Account</h2>
      <form onSubmit={handleFormSubmission}>
        <div>
          <label htmlFor="fullName">
            Full Name:
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
          {fullName && <p>Display name: {fullName}</p>}
        </div>

        <div>
          <label htmlFor="userHandle">
            Username:
          </label>
          <input
            id="userHandle"
            type="text"
            placeholder="Choose a username"
            value={userHandle}
            onChange={handleUserHandleChange}
            required
          />
          {userHandle && <p>Handle: @{userHandle}</p>}
        </div>

        <div>
          <label htmlFor="emailAddress">
            Email Address:
          </label>
          <input
            id="emailAddress"
            type="email"
            placeholder="Enter your email"
            value={emailAddress}
            onChange={handleEmailChange}
            required
          />
          {emailAddress && <p>Contact: {emailAddress}</p>}
        </div>

        <div>
          <label htmlFor="userPassword">
            Password:
          </label>
          <input
            id="userPassword"
            type="password"
            placeholder="Create a password"
            value={userPassword}
            onChange={handlePasswordChange}
            required
          />
          {userPassword && (
            <p>
              Password length: {userPassword.length} characters
            </p>
          )}
        </div>

        <button type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
