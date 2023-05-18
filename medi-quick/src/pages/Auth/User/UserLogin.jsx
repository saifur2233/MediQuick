import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const UserLogin = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const userType = form.role.value;
    const password = form.password.value;
    const userObj = { email, password, userType };
    console.log(userObj);

    if (password.length < 6) {
      setError(`Your Password must be 6 character`);
      return;
    } else {
      setError("");
      // search user email and password
      fetch("http://localhost:4000/api/v1/usersearch", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userObj),
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
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/qCBxKzm/11683784-4794658.jpg"
              alt="11906379-484111"
              width="70%"
            />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center text-primary py-3">
            User Login Panel!
          </h1>
          <form onSubmit={handleUserLogin} className="card-body">
            <p className="text-center text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Type</span>
              </label>
              <select
                name="role"
                defaultValue="Menufacturer"
                className="select required select-bordered w-full"
              >
                <option disabled>Select Your Role</option>
                <option value="Menufacturer">Menufacturer</option>
                <option value="Distributor">Distributor</option>
                <option value="Ratailer">Ratailer</option>
                <option value="TransportAgency">TransportAgency</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
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

export default UserLogin;
