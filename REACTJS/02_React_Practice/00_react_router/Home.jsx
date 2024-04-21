import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      {console.log("Home is called!")}
      <div>Home Page is here!</div>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Home;
