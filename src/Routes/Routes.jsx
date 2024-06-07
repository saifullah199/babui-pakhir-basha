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
        path: "pay/:email",
        element: <PayAgreement />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/person/${params.email}`),
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
