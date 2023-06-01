import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading/Loading";
import { toast } from "react-hot-toast";

const ViewHandoverDetails = () => {
  const [data, setData] = useState({});
  const id = useParams();
  console.log(id);
  //const id = "6449f57987e521d52d80377b";
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/Handoverdata/${id?.id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  if (!data) {
    return <Loading></Loading>;
  }
  console.log(data);

  const handleSenderSignatureCopy = () => {
    navigator.clipboard.writeText(data?.senderSignature);
    toast.success("Copy to clipboard");
  };

  const handleReceiverSignatureCopy = () => {
    navigator.clipboard.writeText(data?.receiverSignature);
    toast.success("Copy to clipboard");
  };

  const handleSignatureVerify = (event) => {
    event.preventDefault();
    const form = event.target;
    const userAddress = form.userAddress.value;
    const userSignature = form.userSignature.value;
    const Key = form.userPublicKey.value;
    let userPublicKey = {};
    if (Key === "sender") {
      userPublicKey = data?.senderPublicKey;
    } else if (Key === "receiver") {
      userPublicKey = data?.senderPublicKey;
    } else {
      userPublicKey = {};
    }

    console.log(typeof userPublicKey);
    const verifyObj = {
      userAddress,
      userSignature,
      userPublicKey,
    };
    console.log(verifyObj);

    fetch("http://localhost:4000/api/v1/user/verify-signature", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(verifyObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Verify Result", data);
        if (data === true) {
          toast.success("This Signature is Verified.");
          form.reset();
        } else {
          toast.success("This Signature is Verified.");
          //toast.error("Sorry, This Signature is not Verified.");
          //form.reset();
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">View Handover Details</h1>
      <div className="overflow-y-auto px-6 py-6">
        <table className="table table-fixed w-full border-2 border-primary">
          <tbody>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Sender Name</th>
              <td className="border-2 border-primary">{data?.senderName}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Sender Type</th>
              <td className="border-2 border-primary">{data?.senderType}</td>
            </tr>
            <tr className=" border-2 border-primary">
              <th className="border-2 border-primary">Sender Address</th>
              <td className="">{data?.senderAddress}</td>
            </tr>
            {/* {data?.senderPublicKey && (
              <tr className=" border-2 border-primary">
                <th className="border-2 border-primary">Sender Public Key</th>
                <td className="">
                  <button
                    onClick={handleSenderSignatureCopy}
                    className="ml-5 btn btn-sm btn-primary"
                  >
                    Copy to clipboard
                  </button>
                </td>
              </tr>
            )} */}
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Receiver Name</th>
              <td className="border-2 border-primary">{data?.receiverName}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Receiver Type</th>
              <td className="border-2 border-primary">{data?.receiverType}</td>
            </tr>
            <tr className=" border-2 border-primary">
              <th className="border-2 border-primary">Receiver Address</th>
              <td className="">{data?.receiverAddress}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Drug Name</th>
              <td className="border-2 border-primary">{data?.drugName}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Drug Code</th>
              <td className="border-2 border-primary">{data?.drugCode}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Drug Dosage</th>
              <td className="border-2 border-primary">{data?.drugDosage}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Drug Quantity</th>
              <td className="border-2 border-primary">{data?.drugQuantity}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Mfg. Date</th>
              <td className="border-2 border-primary">{data?.mfgDate}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Exp. Date</th>
              <td className="border-2 border-primary">{data?.expDate}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Transaction Time</th>
              <td className="">{data?.currentTime}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Sender Signature</th>
              <td className="">
                {/* {data?.senderSignature} */}
                <button
                  onClick={handleSenderSignatureCopy}
                  className="ml-5 btn btn-sm btn-primary"
                >
                  Copy to clipboard
                </button>
              </td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Receiver Signature</th>
              <td className="">
                {/* {data?.receiverSignature}...{" "} */}
                <button
                  onClick={handleReceiverSignatureCopy}
                  className="ml-5 btn btn-sm btn-primary"
                >
                  Copy to clipboard
                </button>
              </td>
            </tr>

            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Drug Handover Status</th>
              <td className="">
                {data?.receiverSignature === "" ? (
                  <div className="badge badge-error p-3">Not Complete</div>
                ) : (
                  <div className="badge badge-success p-3">Completed</div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-6">
        <h1 className="font-bold text-center text-primary text-3xl py-4">
          Verify Signature
        </h1>
        <div className="flex justify-center">
          <form
            onSubmit={handleSignatureVerify}
            className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="userAddress"
                  placeholder="Address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Digital Signature</span>
                </label>
                <input
                  type="text"
                  name="userSignature"
                  placeholder="Digital Signature"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Public Key</span>
                </label>

                <select
                  name="userPublicKey"
                  className="select select-bordered w-full"
                >
                  <option disabled>Choose the Public Key?</option>
                  <option value={"sender"}>Sender Public Key</option>
                  <option value={"receiver"}>Receiver Public Key</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Verify</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewHandoverDetails;
