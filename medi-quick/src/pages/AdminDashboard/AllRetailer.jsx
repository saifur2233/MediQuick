import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../shared/Loading/Loading";
import { toast } from "react-hot-toast";

const AllRetailer = () => {
  const {
    data: allRetails = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allRetails"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/v1/admin/allretailer`);
      const data = await res.json();
      return data.user;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const hnadleDeleteUser = (user) => {
    fetch(`http://localhost:4000/api/v1/admin/user/${user._id}`, {
      method: "DELETE",
    }).then((data) => {
      toast.success("User deleted succesfuly");
      refetch();
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-secondary py-6">
        All Retailer
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Address</th>
              <th>UserType</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allRetails.map((retailer, i) => (
              <tr key={retailer._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="font-bold">{retailer.name}</div>
                </td>
                <td>{retailer.address}</td>
                <td>{retailer.userType}</td>
                <td>
                  <label
                    onClick={() => hnadleDeleteUser(retailer)}
                    className="btn btn-outline btn-error"
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
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRetailer;
