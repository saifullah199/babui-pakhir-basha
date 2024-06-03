import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <NavLink
        to="agreementrequest"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <span className="mx-4 font-medium">Agreement Request</span>
      </NavLink>
      <NavLink
        to="makeanounce"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <span className="mx-4 font-medium">Make Anouncement</span>
      </NavLink>
      <NavLink
        to="managecoupon"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <span className="mx-4 font-medium">Manage Coupon</span>
      </NavLink>
      <NavLink
        to="managemembers"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <span className="mx-4 font-medium">Manage Members</span>
      </NavLink>
    </div>
  );
};

export default AdminMenu;
