import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">User Profile</h1>
          <div className="py-6">
            <div className="card w-96 bg-base-100 shadow-2xl border-1 border-y-4 rounded-b-lg border-primary hover:border-4">
              <figure>
                <div className="avatar">
                  <div className="w-32 rounded-full">
                    <img
                      src="https://i.ibb.co/61QcH8X/avaterpic.png"
                      alt="avaterpic"
                    />
                  </div>{" "}
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{user[0]?.name}</h2>
                <p>Email: {user[0]?.email}</p>
                <p>Address: {user[0]?.address}</p>
                <p>Phone Number: {user[0]?.phone}</p>
                <div className="card-actions justify-end py-4">
                  <button onClick={handleLogout} className="btn btn-primary">
                    LogOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
