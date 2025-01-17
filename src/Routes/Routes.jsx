import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/SignUp/Login";
import Register from "../Pages/SignUp/Register";
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../Pages/DAshboard/MyProfile";
import Anouncement from "../Pages/DAshboard/Anouncement";
import AgreementRequest from "../Pages/DAshboard/Admin/AgreementRequest";
import MakeAnounce from "../Pages/DAshboard/Admin/MakeAnounce";

import ManageMembers from "../Pages/DAshboard/Admin/ManageMembers";
import MakePayment from "../Pages/DAshboard/Member/MakePayment";
import PaymentHistory from "../Pages/DAshboard/Member/PaymentHistory";
import ManageCoupons from "../Pages/DAshboard/Admin/ManageCoupons";
import PayAgreement from "../Pages/DAshboard/Member/Form/PayAgreement";
import PrivateRoute from "./PrivateRoute";
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
        element: (
          <PrivateRoute>
            {" "}
            <Apartment />{" "}
          </PrivateRoute>
        ),
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myprofile",
        element: <MyProfile />,
      },
      {
        path: "pay/:email",
        element: <PayAgreement />,
        loader: ({ params }) =>
          fetch(
            `https://server-peach-omega-42.vercel.app/person/${params.email}`
          ),
      },
      {
        path: "anouncement",
        element: <Anouncement />,
      },
      // Admin routes
      {
        path: "agreementrequest",
        element: <AgreementRequest />,
      },
      {
        path: "makeanounce",
        element: <MakeAnounce />,
      },
      {
        path: "managecoupon",
        element: <ManageCoupons />,
      },
      {
        path: "managemembers",
        element: <ManageMembers />,
      },
      // member routes
      {
        path: "makepayment",
        element: <MakePayment />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
