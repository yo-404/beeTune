import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://cdn.dribbble.com/users/4128378/screenshots/14099181/media/1d235fb3d32a66bc5c96ad0b5e34cf33.png?compress=1&resize=400x300&vertical=top"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}
