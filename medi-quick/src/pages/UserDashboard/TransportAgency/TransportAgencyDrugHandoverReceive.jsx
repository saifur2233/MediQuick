import React, { useContext } from "react";
import Loading from "../../../shared/Loading/Loading";
import { AuthContext } from "../../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const TransportAgencyDrugHandoverReceive = () => {
  const { user } = useContext(AuthContext);
  const reciverName = user[0]?.name;
  const reciverType = user[0]?.userType;
  const receiverEmail = user[0]?.email;
  const reciverAddress = user[0]?.address;
  const receiverSignature = user[0]?.digitalSignature;
  const receiverPublicKey = user[0]?.publicKey;

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

  const handleReceiverAttachSignature = (id) => {
    const reciverSignatureObj = { id, receiverSignature, receiverPublicKey };

    fetch(
      `http://localhost:4000/api/v1/Handoverdata/receiver/attachSignature`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reciverSignatureObj),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Signature Attach successfully.");
      })
      .catch((error) => {
        toast.error("Signature didn't Attach.");
      });
  };

  const handleDrugAddToBasket = (data) => {
    const drug = {
      userName: reciverName,
      userType: reciverType,
      userEmail: receiverEmail,
      userAddress: reciverAddress,
      drugName: data?.drugName,
      drugCode: data?.drugCode,
      drugDosage: data?.drugDosage,
      drugQuantity: data?.drugQuantity,
      mfgDate: data?.mfgDate,
      expDate: data?.expDate,
    };

    fetch("http://localhost:4000/api/v1/drug-basket/wallet/addDrug", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(drug),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        toast.success("Drug successfully added.");

        //navigate("/dashboard/manuViewDrugDetails");
      });
  };
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
                  <th>Signature</th>
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
                      {data?.receiverSignature === "" && (
                        <button
                          onClick={() =>
                            handleReceiverAttachSignature(data._id)
                          }
                          className="btn btn-outline btn-primary"
                        >
                          Attach
                        </button>
                      )}
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDrugAddToBasket(data)}
                          className="btn btn-square btn-success btn-outline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-8 h-8 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() =>
                            navigate(
                              `/dashboard/viewHandoverDetail/${data?._id}`
                            )
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

export default TransportAgencyDrugHandoverReceive;
