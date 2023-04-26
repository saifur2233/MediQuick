import React from "react";

const ManufacturerSendDrug = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold py-6">Drugs Transaction</h1>
          <div className="flex justify-center py-5">
            <form>
              <div className="form-control">
                <label className="input-group">
                  <input
                    type="text"
                    required
                    placeholder="Result"
                    className="input input-bordered"
                  />
                  <span className="btn btn-info text-white">Search</span>
                </label>
              </div>
            </form>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Sender Name</span>
                  </label>
                  <input
                    type="text"
                    name="senderName"
                    placeholder="Sender Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Sender Type</span>
                  </label>
                  <select
                    name="senderType"
                    defaultValue="Menufacturer"
                    className="select required select-bordered w-full max-w-xs"
                  >
                    <option disabled>Select Your Role</option>
                    <option value="Menufacturer">Menufacturer</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Ratailer">Ratailer</option>
                    <option value="TransportAgency">TransportAgency</option>
                  </select>
                </div>
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
                    <span className="label-text">Drug Code</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="#jrej456k"
                    name="drugCode"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Date & Time</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="currentTime"
                    placeholder="Date & Time"
                    className="input input-bordered"
                  />
                </div>
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
              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Mfg_Date</span>
                  </label>
                  <input
                    type="text"
                    name="mfgDate"
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
                    placeholder="Exp_Date"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sender Digital Signature</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="senderSignature"
                    required
                    placeholder="Sender Digital Signature"
                    className="input input-bordered"
                  />
                  <span className="btn btn-info text-white">
                    Attach Signature
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerSendDrug;
