import React, { useEffect, useState } from "react";

const AllUserInfo = () => {
  const [allUserInfo, setAllUserInfo] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/allusers-info`)
      .then((res) => res.json())
      .then((data) => {
        setAllUserInfo(data);
      });
  }, []);

  const handleSearchUser = () => {
    setAllUserInfo([]);
    fetch(`http://localhost:4000/api/v1/user-search/${searchUser}`)
      .then((res) => res.json())
      .then((data) => {
        setAllUserInfo(data);
      });
  };

  const handleCopy = (key) => {
    navigator.clipboard.writeText(key);
    toast.success("Copy to clipboard");
  };

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">View All User Info</h1>
        <div className="py-8">
          <div className="flex justify-center pb-3">
            <form>
              <div className="form-control w-full">
                <label className="input-group input-group-lg">
                  <input
                    type="email"
                    onChange={(e) => setSearchUser(e.target.value)}
                    placeholder="Search User By Email"
                    className="input input-bordered"
                    required
                  />
                  <span
                    onClick={() => handleSearchUser()}
                    className="btn btn-primary"
                  >
                    SEARCH
                  </span>
                </label>
              </div>
            </form>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>address</th>
                  <th>Phone</th>
                  <th>Public Key</th>
                </tr>
              </thead>
              <tbody>
                {allUserInfo.map((user, i) => (
                  <tr key={user._id}>
                    <th>{i + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.userType}</td>
                    <td>{user?.address}</td>
                    <td>{user?.phone}</td>
                    <td>
                      <div className="tooltip" data-tip="Copy Public Key">
                        <label
                          htmlFor="my-modal-3"
                          onClick={() => handleCopy(user?.publicKey)}
                          className="btn btn-outline btn-primary btn-sm"
                        >
                          Copy to clipboard
                        </label>
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

export default AllUserInfo;
