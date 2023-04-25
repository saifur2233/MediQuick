import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const AdminLogin = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleAdminLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const userType = form.role.value;
    const password = form.password.value;
    const adminObj = { email, password, userType };
    console.log(adminObj);

    if (password.length < 6) {
      setError(`Your Password must be 6 character`);
      return;
    } else {
      setError("");
      // search admin email and password
      fetch("http://localhost:4000/api/v1/adminsearch", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(adminObj),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.data === false) {
            setError("Email and Password didn't match!");
          } else {
            // login request send
            logIn(email, password, userType);
            navigate("/dashboard");
          }
        });
    }
  };
  return (
    <div className="hero py-24 bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/VgmQTLN/signup3.jpg"
              width="50%"
              alt="AdminLoginPage"
            />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-primary text-center pt-4">
            Admin Login Panel!
          </h1>
          <form onSubmit={handleAdminLogin} className="card-body">
            <p className="text-center text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Type</span>
              </label>
              <select
                name="role"
                defaultValue="Admin"
                className="select required select-bordered w-full"
              >
                <option disabled>Select Your Role</option>
                <option value="Menufacturer">Admin</option>
                <option value="Distributor">SuperAdmin</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
