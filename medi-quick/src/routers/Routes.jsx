import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import DrugVerify from "../pages/Customer/DrugVerify";
import CheckAuthenticity from "../pages/Customer/CheckAuthenticity";
import UserLogin from "../pages/Auth/User/UserLogin";
import AdminRegistration from "../pages/Auth/Admin/AdminRegistration";
import AdminLogin from "../pages/Auth/Admin/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import Dashboard from "../layouts/Dashboard/Dashboard";
import UserRegistration from "../pages/AdminDashboard/UserRegistration";
import Profile from "../pages/Auth/Profile";
import AllAdmin from "../pages/AdminDashboard/AllAdmin";
import AllManufacturer from "../pages/AdminDashboard/AllManufacturer";
import AllDistributor from "../pages/AdminDashboard/AllDistributor";
import AllTransportAgency from "../pages/AdminDashboard/AllTransportAgency";
import AllRetailer from "../pages/AdminDashboard/AllRetailer";
import AddDrugsMenufacturer from "../pages/UserDashboard/Manufacturer/AddDrugsMenufacturer";
import ManuViewDrugDetails from "../pages/UserDashboard/Manufacturer/ManuViewDrugDetails";
import ManuViewDrugRequest from "../pages/UserDashboard/Manufacturer/ManuViewDrugRequest";
import DistributorViewDrugRequest from "../pages/UserDashboard/Distributor/DistributorViewDrugRequest";
import DistributorViewSendDrugReq from "../pages/UserDashboard/Distributor/DistributorViewSendDrugReq";
import RetailerViewDrugRequest from "../pages/UserDashboard/Retailer/RetailerViewDrugRequest";
import RetailerViewSendDrugReq from "../pages/UserDashboard/Retailer/RetailerViewSendDrugReq";
import TransportAgencyViewDrugReq from "../pages/UserDashboard/TransportAgency/TransportAgencyViewDrugReq";
import TransportAgencyViewSendDrugReq from "../pages/UserDashboard/TransportAgency/TransportAgencyViewSendDrugReq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/drugVerify",
        element: <DrugVerify></DrugVerify>,
      },
      {
        path: "/customer/:drugCode",
        element: <CheckAuthenticity></CheckAuthenticity>,
      },
      {
        path: "/admin-login",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/userlogin",
        element: <UserLogin></UserLogin>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/user-register",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/dashboard/admin-register",
        element: <AdminRegistration></AdminRegistration>,
      },
      {
        path: "/dashboard/alladmin",
        element: <AllAdmin></AllAdmin>,
      },
      {
        path: "/dashboard/allMenufacturer",
        element: <AllManufacturer></AllManufacturer>,
      },
      {
        path: "/dashboard/allDistributor",
        element: <AllDistributor></AllDistributor>,
      },
      {
        path: "/dashboard/allTransportAgency",
        element: <AllTransportAgency></AllTransportAgency>,
      },
      {
        path: "/dashboard/allRetailer",
        element: <AllRetailer></AllRetailer>,
      },
      {
        path: "/dashboard/userRegistration",
        element: <UserRegistration></UserRegistration>,
      },
      {
        path: "/dashboard/addDrug",
        element: <AddDrugsMenufacturer></AddDrugsMenufacturer>,
      },
      {
        path: "/dashboard/manuViewDrugDetails",
        element: <ManuViewDrugDetails></ManuViewDrugDetails>,
      },
      {
        path: "/dashboard/manuViewDrugRequest",
        element: <ManuViewDrugRequest></ManuViewDrugRequest>,
      },
      {
        path: "/dashboard/distributorViewDrugRequest",
        element: <DistributorViewDrugRequest></DistributorViewDrugRequest>,
      },
      {
        path: "/dashboard/distributorViewSendDrugRequest",
        element: <DistributorViewSendDrugReq></DistributorViewSendDrugReq>,
      },
      {
        path: "/dashboard/retailerViewDrugRequest",
        element: <RetailerViewDrugRequest></RetailerViewDrugRequest>,
      },
      {
        path: "/dashboard/retailerViewSendDrugRequest",
        element: <RetailerViewSendDrugReq></RetailerViewSendDrugReq>,
      },
      {
        path: "/dashboard/transportAgencyViewDrugRequest",
        element: <TransportAgencyViewDrugReq></TransportAgencyViewDrugReq>,
      },
      {
        path: "/dashboard/transportAgencyViewSendDrugRequest",
        element: (
          <TransportAgencyViewSendDrugReq></TransportAgencyViewSendDrugReq>
        ),
      },
    ],
  },
]);
