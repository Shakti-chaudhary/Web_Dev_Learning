import React from "react";
import { Link, Outlet } from "react-router-dom";

function Login() {
  return (
    <>
      <div>Login Page here!</div>
      <Link to="/books"> Books</Link>
      <Outlet />
    </>
  );
}

export default Login;
