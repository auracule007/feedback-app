import React from "react";
import Card from "../components/shared/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = useNavigate();

  async function registerhandler(e) {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.text();
      if (data === "Invalid") {
        alert("User already exists!..");
      } else if (data !== "Invalid") {
        redirect("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Card>
      <h2 className="login-user">Registration</h2>
      <form onSubmit={registerhandler}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="Input-text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="Input-text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="Input-text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit" className="login">
            Register
          </button>
        </div>
      </form>
    </Card>
  );
}

export default Register;
