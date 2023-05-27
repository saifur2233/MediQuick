import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const userName = user[0]?.name;
  const userAddress = user[0]?.address;
  const userType = user[0]?.userType;
  const email = user[0]?.email;
  const userPhone = user[0]?.phone;

  const handleUserInfoUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const password = form.password.value;
    const phone = form.phone.value;

    const updateObj = {
      name,
      password,
      phone,
    };
    console.log(updateObj);
    fetch(`http://localhost:4000/api/v1/users/info/${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Profile Updated Succesfuly");
        navigate("/dashboard");
        window.location.reload();
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <form
            onSubmit={handleUserInfoUpdate}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">
                Update Profile Info
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue={email}
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  defaultValue={userAddress}
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Type</span>
                </label>
                <input
                  type="text"
                  defaultValue={userType}
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={userName}
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type="text"
                  placeholder="New Password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  defaultValue={userPhone}
                  name="phone"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">UPDATE PROFILE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
