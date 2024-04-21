import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
  Outlet,
  Link,
  Route,
} from "react-router-dom";
import Login from "./Login";
import { Data, dataLoader } from "./Data";
import Home from "./Home";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<Data />} loader={dataLoader} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

const Root = () => {
  return (
    <>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/data"> Data</Link>
        <Link to="/home"> Home</Link>
      </div>
      <div>
        <div>Outlet is here!3</div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
