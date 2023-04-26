import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Profile = () => {
  const item =
    " You've been selected for a chance to get one year of subscription to";
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };

  const handleSignatureCopy = () => {
    navigator.clipboard.writeText(user[0]?.digitalSignature);
    toast.success("Copy to clipboard");
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
                  <div className="flex justify-center gap-3">
                    <button onClick={handleLogout} className="btn btn-success">
                      Update Profile
                    </button>
                    <button onClick={handleLogout} className="btn btn-primary">
                      LogOut
                    </button>
                    <label htmlFor="my-modal-3" className="btn btn-secondary">
                      Signature
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Your Digital Signature</h3>
          <p className="py-4">{user[0]?.digitalSignature}</p>
          <div className="tooltip" data-tip="Copy Digital Signature">
            <label
              htmlFor="my-modal-3"
              onClick={handleSignatureCopy}
              className="btn btn-accent"
            >
              Copy to clipboard
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
