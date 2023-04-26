import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="sweet-loading">
      <HashLoader
        color="#36d7b7"
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="1"
      />
    </div>
  );
};

export default Loading;
