import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul>
          <li>
            <NavLink to="myprofile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="anouncement">Anonouncement</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
