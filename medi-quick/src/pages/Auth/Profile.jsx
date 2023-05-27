import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ethers } from "ethers";

const Profile = () => {
  const item =
    " You've been selected for a chance to get one year of subscription to";
  const navigate = useNavigate();

  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");

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

  const handleUpdateSignature = () => {
    const address = user[0]?.address;
    const id = user[0]?._id;
    console.log(user[0]?._id);
    console.log(user[0]?.digitalSignature);

    fetch(`http://localhost:4000/api/v1/user/update-signature/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ address }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Signature Updated");
        //navigate("/dashboard");
        window.location.reload();
      });
  };

  const handleConnectMatamask = async () => {
    //console.log("Hello from metamask");
    try {
      if (window.ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccountAddress(accounts[0]);
        let balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        });
        setAccountBalance(balance);
        setIsConnected(true);

        //console.log(isConnected, accountAddress, accountBalance);
      } else {
        alert("Install metamask extension!!");
      }
    } catch (error) {
      setIsConnected(false);
    }
  };
  const handleDisconnectMatamask = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [{ eth_accounts: {} }],
    });
    setIsConnected(false);
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
                <p className=""> Role: {user[0]?.userType}</p>
                <p>Email: {user[0]?.email}</p>
                <p>Address: {user[0]?.address}</p>
                <p>Phone Number: {user[0]?.phone}</p>
                <div className="card-actions justify-end py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => navigate("/dashboard/user/update-profile")}
                      className="btn btn-success"
                    >
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
          <div className="py-6">
            <h1 className="text-5xl font-bold py-3">MetaMask</h1>
            <div className="card w-96 bg-base-100 shadow-2xl border-1 border-y-4 rounded-b-lg border-primary hover:border-4">
              <figure>
                <div className="avatar pt-6">
                  <div className="w-32 rounded-full">
                    <img
                      src="https://i.ibb.co/rbXNTmJ/metamask.png"
                      alt="metamaskpic"
                    />
                  </div>{" "}
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">MetaMask Account</h2>
                {isConnected ? (
                  <>
                    <p>
                      Wallet Address: {accountAddress.slice(0, 4)}...
                      {accountAddress.slice(38, 42)}
                    </p>
                    <p>
                      Wallet Balance:
                      {parseInt(accountBalance, 16)} "ETH"
                    </p>
                    <div className="card-actions justify-end py-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={handleDisconnectMatamask}
                          className="btn btn-error"
                        >
                          Disconnect MetaMask
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="card-actions justify-end py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={handleConnectMatamask}
                        className="btn btn-success"
                      >
                        Connect MetaMask
                      </button>
                    </div>
                  </div>
                )}
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
          <button
            onClick={handleUpdateSignature}
            className="btn btn-primary ml-3"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
