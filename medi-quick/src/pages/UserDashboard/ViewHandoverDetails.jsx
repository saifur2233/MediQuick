import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading/Loading";

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
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">View Handover Details</h1>
      <div className="overflow-x-auto px-6 py-6">
        <table className="table table-auto w-full border-2 border-primary">
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
              <td className="">{data?.senderSignature}</td>
            </tr>
            <tr className="border-2 border-primary">
              <th className="border-2 border-primary">Receiver Signature</th>
              <td className="">{data?.receiverSignature}</td>
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
      <div className="py-6 flex justify-center gap-6">
        <button className="btn btn-success">Back</button>
        <button onClick={() => window.print()} className="btn btn-primary">
          Print
        </button>
      </div>
    </div>
  );
};

export default ViewHandoverDetails;
