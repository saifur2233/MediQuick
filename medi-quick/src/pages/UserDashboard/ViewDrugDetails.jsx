import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const ViewDrugDetails = () => {
  const id = useParams();
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [quantity, setQuantity] = useState("");

  const {
    data: drug = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["drug"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/drug-basket/drug/${id.id}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(drug);
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDrugUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const drugname = form.drugname.value;
    const drugdosage = form.drugdosage.value;
    const drugquantity = form.drugquantity.value;
    const updateObj = {
      drugName: drugname,
      drugDosage: drugdosage,
      drugQuantity: drugquantity,
    };
    fetch(`http://localhost:4000/api/v1/drug-basket/drug/${drug._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateObj),
    }).then((data) => {
      toast.success("User Updated succesfuly");
      refetch();
    });
  };
  return (
    <div className="py-6">
      <div className="flex justify-center">
        <form
          onSubmit={handleDrugUpdate}
          className="card w-full max-w-lg shadow-2xl bg-base-100"
        >
          <h1 className="font-bold text-center text-2xl pt-3">
            View Drug Details
          </h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                defaultValue={drug?.userName}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Type</span>
              </label>
              <input
                type="text"
                defaultValue={drug?.userType}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                defaultValue={drug?.userEmail}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Drug Name</span>
              </label>
              <input
                type="text"
                name="drugname"
                defaultValue={drug?.drugName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Drug Dosage</span>
              </label>
              <input
                type="text"
                name="drugdosage"
                defaultValue={drug?.drugDosage}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Drug Quantuty</span>
              </label>
              <input
                type="text"
                name="drugquantity"
                defaultValue={drug?.drugQuantity}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Drug Code</span>
              </label>
              <input
                type="text"
                defaultValue={drug?.drugCode}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Drug Mfg. Date</span>
              </label>
              <input
                type="text"
                defaultValue={drug?.mfgDate}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Drug Exp. Date</span>
              </label>
              <input
                type="text"
                defaultValue={drug?.expDate}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">UPDATE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewDrugDetails;
