import React, { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import Loading from "../../../shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const DistributorDrugHandoverReceive = () => {
  const { user } = useContext(AuthContext);
  const reciverAddress = user[0]?.address;
  const navigate = useNavigate();
  const {
    data: allHandoverData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allHandoverData"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/Handoverdata/receiver/${reciverAddress}`
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
        <h1 className="font-bold text-3xl text-center">
          View Handover Details
        </h1>
        <div className="py-8">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Date</th>
                  <th>Sender Name</th>
                  <th>Drug Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allHandoverData.map((data, i) => (
                  <tr key={data._id}>
                    <th>{i + 1}</th>
                    <td>{data?.currentTime}</td>
                    <td>{data?.senderName}</td>
                    <td>{data?.drugName}</td>
                    <td>
                      <button
                        onClick={() =>
                          navigate(`/dashboard/viewHandoverDetail/${data?._id}`)
                        }
                        className="btn btn-square btn-secondary btn-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
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

export default DistributorDrugHandoverReceive;
