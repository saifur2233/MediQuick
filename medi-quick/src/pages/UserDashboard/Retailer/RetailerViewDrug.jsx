import React, { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../shared/Loading/Loading";
import { toast } from "react-hot-toast";

const RetailerViewDrug = () => {
  const { user } = useContext(AuthContext);
  const address = user[0]?.address;
  const navigate = useNavigate();
  const {
    data: allDrugs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allDrugs"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/drug-basket/retailer/drugs/${address}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(allDrugs);
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteDrug = (drug) => {
    fetch(`http://localhost:4000/api/v1/drug-basket/drug/${drug._id}`, {
      method: "DELETE",
    }).then((data) => {
      toast.success("Drug deleted succesfuly");
      refetch();
    });
  };

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">View Drugs Details</h1>
        <div className="py-8">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>DrugName</th>
                  <th>Code</th>
                  <th>Dosage</th>
                  <th>Quantity</th>
                  <th>MfgDate</th>
                  <th>ExpDate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allDrugs.map((drug, i) => (
                  <tr key={drug._id}>
                    <th>{i + 1}</th>
                    <td>{drug?.drugName}</td>
                    <td>{drug?.drugCode}</td>
                    <td>{drug?.drugDosage}</td>
                    <td>{drug?.drugQuantity}</td>
                    <td>{drug?.mfgDate}</td>
                    <td>{drug?.expDate}</td>
                    <td>
                      <div className="flex gap-2">
                        {/* <button
                          onClick={() =>
                            navigate(`/dashboard/viewDrugDetails/${drug?._id}`)
                          }
                          className="btn btn-square btn-primary btn-outline"
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                        </button> */}
                        <button
                          onClick={() => handleDeleteDrug(drug)}
                          className="btn btn-square btn-error btn-outline"
                        >
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
                      </div>
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

export default RetailerViewDrug;
