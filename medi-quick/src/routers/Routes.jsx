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
import ManuViewDrug from "../pages/UserDashboard/Manufacturer/ManuViewDrug";
import ManuViewDrugRequest from "../pages/UserDashboard/Manufacturer/ManuViewDrugRequest";
import DistributorViewDrugRequest from "../pages/UserDashboard/Distributor/DistributorViewDrugRequest";
import DistributorViewSendDrugReq from "../pages/UserDashboard/Distributor/DistributorViewSendDrugReq";
import TransportAgencyViewDrugReq from "../pages/UserDashboard/TransportAgency/TransportAgencyViewDrugReq";
import ManufacturerSendDrug from "../pages/UserDashboard/Manufacturer/ManufacturerSendDrug";
import ManuDrugHandoverDetails from "../pages/UserDashboard/Manufacturer/ManuDrugHandoverDetails";
import DistributorSendDrug from "../pages/UserDashboard/Distributor/DistributorSendDrug";
import DistributorDrugHandoverReceive from "../pages/UserDashboard/Distributor/DistributorDrugHandoverReceive";
import DistributorDrugHandoverSend from "../pages/UserDashboard/Distributor/DistributorDrugHandoverSend";
import TransportAgencySendDrug from "../pages/UserDashboard/TransportAgency/TransportAgencySendDrug";
import TransportAgencyDrugHandoverSend from "../pages/UserDashboard/TransportAgency/TransportAgencyDrugHandoverSend";
import TransportAgencyDrugHandoverReceive from "../pages/UserDashboard/TransportAgency/TransportAgencyDrugHandoverReceive";
import RetailerDrugHandoverReceive from "../pages/UserDashboard/Retailer/RetailerDrugHandoverReceive";
import ViewHandoverDetails from "../pages/UserDashboard/ViewHandoverDetails";
import RetailerSendDrugReq from "../pages/UserDashboard/Retailer/RetailerSendDrugReq";
import DistributorSendDrugReq from "../pages/UserDashboard/Distributor/DistributorSendDrugReq";
import RetailerViewSendDrugReq from "../pages/UserDashboard/Retailer/RetailerViewSendDrugReq";
import RetailerViewDrugRequest from "../pages/UserDashboard/Retailer/RetailerViewDrugRequest";
import TransportAgencySendDrugReq from "../pages/UserDashboard/TransportAgency/TransportAgencySendDrugReq";
import TransportAgencyViewSendDrugReq from "../pages/UserDashboard/TransportAgency/TransportAgencyViewSendDrugReq";
import AllUserInfo from "../pages/UserDashboard/AllUserInfo";
import ViewDrugDetails from "../pages/UserDashboard/ViewDrugDetails";
import DistributorViewDrug from "../pages/UserDashboard/Distributor/DistributorViewDrug";
import TransportAgencyViewDrug from "../pages/UserDashboard/TransportAgency/TransportAgencyViewDrug";
import RetailerViewDrug from "../pages/UserDashboard/Retailer/RetailerViewDrug";
import ManuGenerateQR from "../pages/UserDashboard/Manufacturer/ManuGenerateQR";
import UpdateProfile from "../pages/Auth/UpdateProfile";
import RetailerSendDrug from "../pages/UserDashboard/Retailer/RetailerSendDrug";

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
      {
        path: "/admin-register",
        element: <AdminRegistration></AdminRegistration>,
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
        path: "/dashboard/user/update-profile",
        element: <UpdateProfile></UpdateProfile>,
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
        element: <ManuViewDrug></ManuViewDrug>,
      },
      {
        path: "/dashboard/ManuSendDrug",
        element: <ManufacturerSendDrug></ManufacturerSendDrug>,
      },
      {
        path: "/dashboard/ManuDrugHandover",
        element: <ManuDrugHandoverDetails></ManuDrugHandoverDetails>,
      },
      {
        path: "/dashboard/manuViewDrugRequest",
        element: <ManuViewDrugRequest></ManuViewDrugRequest>,
      },
      {
        path: "/dashboard/qrCode",
        element: <ManuGenerateQR></ManuGenerateQR>,
      },
      {
        path: "/dashboard/distributorViewDrug",
        element: <DistributorViewDrug></DistributorViewDrug>,
      },
      {
        path: "/dashboard/distributorSendDrug",
        element: <DistributorSendDrug></DistributorSendDrug>,
      },
      {
        path: "/dashboard/distributorSendHandover",
        element: <DistributorDrugHandoverSend></DistributorDrugHandoverSend>,
      },
      {
        path: "/dashboard/distributorReceiveHandover",
        element: (
          <DistributorDrugHandoverReceive></DistributorDrugHandoverReceive>
        ),
      },
      {
        path: "/dashboard/distributorSendDrugRequest",
        element: <DistributorSendDrugReq></DistributorSendDrugReq>,
      },
      {
        path: "/dashboard/distributorViewSendDrugRequest",
        element: <DistributorViewSendDrugReq></DistributorViewSendDrugReq>,
      },
      {
        path: "/dashboard/distributorViewDrugRequest",
        element: <DistributorViewDrugRequest></DistributorViewDrugRequest>,
      },
      {
        path: "/dashboard/retailerViewDrug",
        element: <RetailerViewDrug></RetailerViewDrug>,
      },
      {
        path: "/dashboard/retailerSendDrug",
        element: <RetailerSendDrug></RetailerSendDrug>,
      },
      {
        path: "/dashboard/retailerReceiveHandover",
        element: <RetailerDrugHandoverReceive></RetailerDrugHandoverReceive>,
      },
      {
        path: "/dashboard/retailerSendDrugRequest",
        element: <RetailerSendDrugReq></RetailerSendDrugReq>,
      },
      {
        path: "/dashboard/retailerViewSendDrugRequest",
        element: <RetailerViewSendDrugReq></RetailerViewSendDrugReq>,
      },
      {
        path: "/dashboard/retailerViewDrugRequest",
        element: <RetailerViewDrugRequest></RetailerViewDrugRequest>,
      },
      {
        path: "/dashboard/transportAgencyViewDrug",
        element: <TransportAgencyViewDrug></TransportAgencyViewDrug>,
      },
      {
        path: "/dashboard/transportAgencySendDrug",
        element: <TransportAgencySendDrug></TransportAgencySendDrug>,
      },
      {
        path: "/dashboard/transportAgencySendHandover",
        element: (
          <TransportAgencyDrugHandoverSend></TransportAgencyDrugHandoverSend>
        ),
      },
      {
        path: "/dashboard/transportAgencyReceiveHandover",
        element: (
          <TransportAgencyDrugHandoverReceive></TransportAgencyDrugHandoverReceive>
        ),
      },
      {
        path: "/dashboard/transportAgencySendDrugReq",
        element: <TransportAgencySendDrugReq></TransportAgencySendDrugReq>,
      },
      {
        path: "/dashboard/transportAgencyViewSendDrugReq",
        element: (
          <TransportAgencyViewSendDrugReq></TransportAgencyViewSendDrugReq>
        ),
      },
      {
        path: "/dashboard/transportAgencyViewDrugRequest",
        element: <TransportAgencyViewDrugReq></TransportAgencyViewDrugReq>,
      },
      {
        path: "/dashboard/viewHandoverDetail/:id",
        element: <ViewHandoverDetails></ViewHandoverDetails>,
      },
      {
        path: "/dashboard/viewAllUserInfo",
        element: <AllUserInfo></AllUserInfo>,
      },
      {
        path: "/dashboard/viewDrugDetails/:id",
        element: <ViewDrugDetails></ViewDrugDetails>,
      },
    ],
  },
]);
