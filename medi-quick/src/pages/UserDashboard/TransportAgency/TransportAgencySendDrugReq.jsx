import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/UserContext";
import { toast } from "react-hot-toast";

const TransportAgencySendDrugReq = () => {
  const { user } = useContext(AuthContext);
  const senderName = user[0]?.name;
  const senderType = user[0]?.userType;
  const senderEmail = user[0]?.email;

  const [currentTime, setCurrentTime] = useState("");

  const getCurrentDate = () => {
    var today = new Date().toLocaleString();
    setCurrentTime(today);
  };

  const handleDrugRequest = (event) => {
    event.preventDefault();
    const form = event.target;
    const receiverName = form.receiverName.value;
    const receiverType = form.receiverType.value;
    const receiverEmail = form.receiverEmail.value;
    const drugName = form.drugName.value;
    const drugDosage = form.drugDosage.value;
    const drugQuantity = form.drugQuantity.value;
    const reqObj = {
      senderName,
      senderType,
      senderEmail,
      receiverName,
      receiverType,
      receiverEmail,
      drugName,
      drugDosage,
      drugQuantity,
      currentTime,
    };

    console.log(reqObj);
    fetch("http://localhost:4000/api/v1/drugrequest/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reqObj),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        toast.success("Drug request send successfully.");
        form.reset();
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold py-6">Drugs Request</h1>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleDrugRequest} className="card-body">
              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Sender Name</span>
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    placeholder="Sender Name"
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Sender Type</span>
                  </label>
                  <input
                    type="text"
                    value={senderType}
                    placeholder="Sender Name"
                    className="input input-bordered"
                    readOnly
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sender Address</span>
                </label>
                <input
                  type="text"
                  value={senderEmail}
                  placeholder="Sender Address"
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Receiver Name</span>
                  </label>
                  <input
                    type="text"
                    name="receiverName"
                    placeholder="Receiver Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Receiver Type</span>
                  </label>
                  <select
                    name="receiverType"
                    className="select required select-bordered w-full max-w-xs"
                  >
                    <option disabled>Select Receiver Role</option>
                    <option value="Manufacturer">Manufacturer</option>
                    <option value="Distributor">Distributor</option>
                    <option value="TransportAgency">TransportAgency</option>
                    <option value="Retailer">Retailer</option>
                  </select>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Receiver Email</span>
                </label>
                <input
                  type="text"
                  name="receiverEmail"
                  placeholder="Sender Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drug Name</span>
                </label>
                <input
                  type="text"
                  name="drugName"
                  placeholder="Drug Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Drug Dosage</span>
                  </label>
                  <input
                    type="text"
                    name="drugDosage"
                    placeholder="Drug Dosage"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Drug Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="drugQuantity"
                    placeholder="Drug Quantity"
                    className="input input-bordered"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date & Time</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    value={currentTime}
                    placeholder="Date & Time"
                    className="input input-bordered"
                  />
                  <span
                    onClick={getCurrentDate}
                    className="btn btn-outline btn-info text-white"
                  >
                    Current Time & Date
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportAgencySendDrugReq;
