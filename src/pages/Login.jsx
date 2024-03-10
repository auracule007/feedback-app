import React from "react";
import Card from "../components/shared/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useAuth()
  const { setItem } = useLocalStorage("x-auth-token")

  const redirect = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();

    try {
      const res = await fetch(`https://feedback-backend-a25q.onrender.com/api/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        dispatch({ type: "setToken", payload: data.token })
        setItem(data.token)
        redirect("/");
      } else if (res.status !== 200) {
        alert("Invalid Email or Password!..");
      }
    } catch (err) {
      consoe.log(err);
    }
  }

  // AuthContext hooks useLocalStorage.js
  return (
    <Card>
      <h2 className="login-user">Login</h2>
      <form onSubmit={loginHandler}>
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
            Login
          </button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
