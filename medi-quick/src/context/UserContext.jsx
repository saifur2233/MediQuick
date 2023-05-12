import React, { createContext, useEffect, useState } from "react";
import { isExpired, decodeToken } from "react-jwt";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const logIn = (email, password, userType) => {
    const adminObj = { email, password, userType };
    setLoading(true);
    fetch("http://localhost:4000/api/v1/adminsignin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminObj),
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        localStorage.setItem("access_token", result.access_token);
        setUser(result.user);
      })
      .catch((err) => {
        setUser({});
      });
  };

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("access_token");
    setUser({});
  };

  const fetchData = () => {
    const token = localStorage.getItem("access_token");
    //console.log("Token: ", token);
    if (token) {
      const myDecodedToken = decodeToken(token);
      //console.log("myDecodedToken: ", myDecodedToken?.email);
      const isMyTokenExpired = isExpired(token);
      fetch(
        `http://localhost:4000/api/v1/adminByEmail/${myDecodedToken?.email}`
      )
        .then((res) => res.json())
        .then((result) => {
          //console.log(result);
          setUser(result.user);
        })
        .catch((err) => {
          setUser({});
        });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const authInfo = {
    user,
    loading,
    logIn,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
