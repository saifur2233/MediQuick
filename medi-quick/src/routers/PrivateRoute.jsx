import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import HashLoader from "react-spinners/HashLoader";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  if (loading) {
    return (
      <div className="sweet-loading">
        <HashLoader
          color="#36d7b7"
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier="1"
        />
      </div>
    );
  }

  if (user[0]?.userType === "SuperAdmin") {
    return children;
  }
  return (
    <Navigate to="/adminlogin" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
