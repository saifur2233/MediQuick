import React, { useContext } from "react";
import Loading from "../../../shared/Loading/Loading";
import { AuthContext } from "../../../context/UserContext";
import { useQuery } from "@tanstack/react-query";

const RetailerViewSendDrugReq = () => {
  const { user } = useContext(AuthContext);
  const senderEmail = user[0]?.email;

  const {
    data: allDrugReq = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allDrugReq"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/drugrequest/sender/${senderEmail}`
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">View Drugs Request</h1>
        <div className="py-8">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Receiver Name</th>
                  <th>Receiver Email</th>
                  <th>Receiver Type</th>
                  <th>Drug Name</th>
                  <th>Drug Dosage</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allDrugReq.map((req, i) => (
                  <tr key={req._id}>
                    <th>{i + 1}</th>
                    <td>{req?.receiverName}</td>
                    <td>{req?.receiverEmail}</td>
                    <td>{req?.receiverType}</td>
                    <td>{req?.drugName}</td>
                    <td>{req?.drugDosage}</td>
                    <td>{req?.drugQuantity}</td>
                    <td>
                      <button className="btn btn-square btn-secondary btn-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerViewSendDrugReq;
