import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/UserContext";
import { toast } from "react-hot-toast";
import Html5QrcodePlugin from "../../Customer/Html5QrcodePlugin";

const TransportAgencySendDrug = () => {
  const { user } = useContext(AuthContext);
  const senderName = user[0]?.name;
  const senderAddress = user[0]?.address;
  const senderType = user[0]?.userType;

  const [drugDetials, setDrugDetials] = useState([]);
  const [currentTime, setCurrentTime] = useState("");
  const [senderSignature, setSenderSignature] = useState(null);
  const [decodedResults, setDecodedResults] = useState("");

  const onNewScanResult = (decodedText, decodedResults) => {
    console.log("Result: ", decodedResults);
    setDecodedResults(decodedResults?.decodedText);
  };

  console.log(decodedResults);

  const getCurrentDate = () => {
    var today = new Date().toLocaleString();
    setCurrentTime(today);
  };
  const attachSignature = () => {
    setSenderSignature(user[0]?.digitalSignature);
  };

  const handleSearchDeug = (event) => {
    event.preventDefault();
    const form = event.target;
    const drugId = form.drugId.value;
    fetch(`http://localhost:4000/api/v1/drug-basket/${drugId}`)
      .then((res) => res.json())
      .then((result) => {
        const data = result.drug;
        if (data.length === 0) {
          toast.error("Drug details not found.");
        } else if (data.length === 1) {
          setDrugDetials(data);
          toast.success("Drug details found.");
        }
      });
  };

  const handleSupplyChain = (event) => {
    event.preventDefault();
    const form = event.target;
    const receiverName = form.receiverName.value;
    const receiverType = form.receiverType.value;
    const receiverAddress = form.receiverAddress.value;
    const drugName = form.drugName.value;
    const drugCode = form.drugCode.value;
    const drugDosage = form.drugDosage.value;
    const drugQuantity = form.drugQuantity.value;
    const mfgDate = form.mfgDate.value;
    const expDate = form.expDate.value;

    const SupplyChainObj = {
      senderName,
      senderType,
      senderAddress,
      receiverName,
      receiverType,
      receiverAddress,
      drugName,
      drugCode,
      drugDosage,
      drugQuantity,
      mfgDate,
      expDate,
      currentTime,
      senderSignature,
    };

    console.log(SupplyChainObj);

    fetch("http://localhost:4000/api/v1/drug-supplychain/addHandover", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(SupplyChainObj),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        toast.success("Drug Handover Data added.");
        form.reset();
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold py-6">Drugs Transaction</h1>
          <div className="flex justify-center gap-6 py-5">
            <div>
              <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
              ></Html5QrcodePlugin>
            </div>
            <form onSubmit={handleSearchDeug}>
              <div className="form-control">
                <input
                  type="text"
                  value={decodedResults}
                  name="drugId"
                  placeholder="Search with Drug Code"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSupplyChain} className="card-body">
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
                  value={senderAddress}
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
                    <option value="Distributor">Distributor</option>
                    <option value="Ratailer">Ratailer</option>
                    <option value="TransportAgency">TransportAgency</option>
                  </select>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Receiver Address</span>
                </label>
                <input
                  type="text"
                  name="receiverAddress"
                  placeholder="Receiver Address"
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
                  value={drugDetials[0]?.drugName}
                  placeholder="Drug Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drug Code</span>
                </label>
                <input
                  type="text"
                  value={drugDetials[0]?.drugCode}
                  required
                  placeholder="#jrej456k"
                  name="drugCode"
                  className="input input-bordered"
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
                    value={drugDetials[0]?.drugDosage}
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
                    value={drugDetials[0]?.drugQuantity}
                    placeholder="Drug Quantity"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Mfg_Date</span>
                  </label>
                  <input
                    type="text"
                    name="mfgDate"
                    value={drugDetials[0]?.mfgDate}
                    placeholder="Mfg_Date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Exp_Date</span>
                  </label>
                  <input
                    type="text"
                    name="expDate"
                    value={drugDetials[0]?.expDate}
                    placeholder="Exp_Date"
                    className="input input-bordered"
                    required
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
                    className="btn btn-info text-white"
                  >
                    Current Time & Date
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sender Digital Signature</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    value={senderSignature}
                    readOnly
                    required
                    placeholder="Sender Digital Signature"
                    className="input input-bordered"
                  />
                  <span
                    onClick={attachSignature}
                    className="btn btn-info text-white"
                  >
                    Attach Signature
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

export default TransportAgencySendDrug;
