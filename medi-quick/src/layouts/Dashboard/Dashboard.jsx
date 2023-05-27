import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../shared/Header/Header";
import { AuthContext } from "../../context/UserContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile py-8">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">Profile</Link>
            </li>
            {user[0]?.userType === "SuperAdmin" && (
              <>
                <li>
                  <Link to="/dashboard/admin-register">Admin Register</Link>
                </li>
                <li>
                  <Link to="/dashboard/alladmin">All Admin</Link>
                </li>
              </>
            )}
            {(user[0]?.userType === "SuperAdmin" ||
              user[0]?.userType === "Admin") && (
              <>
                <li>
                  <Link to="/dashboard/user-register">User Register</Link>
                </li>
                <li>
                  <Link to="/dashboard/allMenufacturer">All Menufacturer</Link>
                </li>
                <li>
                  <Link to="/dashboard/allDistributor">All Distributor</Link>
                </li>
                <li>
                  <Link to="/dashboard/allRetailer">All Retailer</Link>
                </li>
                <li>
                  <Link to="/dashboard/alltransportagency">
                    Transport Agency
                  </Link>
                </li>
              </>
            )}
            {user[0]?.userType === "Manufacturer" && (
              <>
                <li>
                  <Link to="/dashboard/addDrug">Add Drug</Link>
                </li>
                <li>
                  <Link to="/dashboard/manuViewDrugDetails">
                    View Drug Details
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/ManuSendDrug">Send Drugs</Link>
                </li>
                <li>
                  <Link to="/dashboard/ManuDrugHandover">Drug Handover</Link>
                </li>
                <li>
                  <Link to="/dashboard/manuViewDrugRequest">
                    View Drug Request
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/qrCode">Generate QR Code</Link>
                </li>
              </>
            )}
            {user[0]?.userType === "Distributor" && (
              <>
                <li>
                  <Link to="/dashboard/distributorViewDrug">Drugs Wallet</Link>
                </li>
                <li>
                  <Link to="/dashboard/distributorSendDrug">Send Drugs</Link>
                </li>
                <li>
                  <Link to="/dashboard/distributorSendHandover">
                    View Send Drug Handover
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/distributorReceiveHandover">
                    Receive Drug Handover
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/distributorSendDrugRequest">
                    Send Drug Request
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/distributorViewSendDrugRequest">
                    View Send Drug Request
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/distributorViewDrugRequest">
                    View Drug Request
                  </Link>
                </li>
              </>
            )}
            {user[0]?.userType === "Retailer" && (
              <>
                <li>
                  <Link to="/dashboard/retailerViewDrug">Drugs Wallet</Link>
                </li>
                <li>
                  <Link to="/dashboard/retailerSendDrug">Send Drugs</Link>
                </li>
                <li>
                  <Link to="/dashboard/retailerReceiveHandover">
                    Receive Drug Handover
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/retailerSendDrugRequest">
                    Send Drug Request
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/retailerViewSendDrugRequest">
                    View Send Drug Request
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/retailerViewDrugRequest">
                    View Drug Request
                  </Link>
                </li>
              </>
            )}
            {user[0]?.userType === "TransportAgency" && (
              <>
                <li>
                  <Link to="/dashboard/transportAgencyViewDrug">
                    Drugs Wallet
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/transportAgencySendDrug">
                    Send Drugs
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/transportAgencySendHandover">
                    View Send Drug Handover
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/transportAgencyReceiveHandover">
                    Receive Drug Handover
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/transportAgencySendDrugReq">
                    Send Drug Request
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/transportAgencyViewSendDrugReq">
                    View Send Drug Request
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/transportAgencyViewDrugRequest">
                    View Drug Request
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard/viewAllUserInfo">All User Info</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
