import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/SignUp/Login";
import Register from "../Pages/SignUp/Register";
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../Pages/DAshboard/MyProfile";
import Anouncement from "../Pages/DAshboard/Anouncement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment",
        element: <Apartment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "myprofile",
        element: <MyProfile />,
      },
      {
        path: "anouncement",
        element: <Anouncement />,
      },
    ],
  },
]);

export default router;
