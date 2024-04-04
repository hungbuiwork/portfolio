import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";




const router = createHashRouter([
  {
    path: "/",
    element:  <div><Navbar></Navbar> <Home mode = {0}></Home></div>
  },
  {
    path: "/GD",
    element:  <div><Navbar></Navbar> <Home mode = {2}></Home></div>
  },
  {
    path: "/SE",
    element: <div><Navbar></Navbar> <Home mode = {1}></Home></div>
  },
  {
    path: "*",
    element: <Navigate to = "/"></Navigate>
  },
]);

function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
