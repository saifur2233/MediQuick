import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading/Loading";
import { toast } from "react-hot-toast";

const AllAdmin = () => {
  const {
    data: allAdmin = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allAdmin"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/v1/admin/alladmin`);
      const data = await res.json();
      return data.admin;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const hnadleDeleteUser = (user) => {
    fetch(`http://localhost:4000/api/v1/admin/user/${user._id}`, {
      method: "DELETE",
    }).then((data) => {
      toast.success("Admin deleted succesfuly");
      refetch();
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-secondary py-6">
        All Admin
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>User Type</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allAdmin.map((admin, i) => (
              <tr key={admin._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="font-bold">{admin.name}</div>
                </td>
                <td>{admin.email}</td>
                <td>{admin.password}</td>
                <td>{admin.userType}</td>
                <td>{admin.phone}</td>
                <td>
                  <label
                    onClick={() => hnadleDeleteUser(admin)}
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

export default AllAdmin;
