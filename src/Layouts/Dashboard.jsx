import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <ul>
            <Sidebar />
            {/* <li>
              <NavLink to="myprofile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="anouncement">Anonouncement</NavLink>
            </li> */}
          </ul>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
