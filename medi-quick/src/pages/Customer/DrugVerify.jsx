import React, { useState } from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import ResultContainer from "./ResultContainer";
import YouTube from "react-youtube";

const DrugVerify = () => {
  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResults) => {
    console.log("Result: ", decodedResults);
    setDecodedResults((prev) => [...prev, decodedResults]);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="pt-8">
      <div className="hero py-6">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Verify The Drugs</h1>
            <p className="py-6 text-center font-bold italic">
              "Detecting counterfeit drugs, protecting lives - That's the
              MediQuick promise"
            </p>
            <div>
              <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
              ></Html5QrcodePlugin>
            </div>
            <div className="flex justify-center">
              <ResultContainer results={decodedResults}></ResultContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">How To Verify Your Drugs?</h1>
            <p className="py-6 text-center font-bold italic">
              "MediQuick: Where safety meets innovation - Secure your health
              with us"
            </p>
            <div className="py-6">
              <YouTube videoId="OVvRoJ97rPw" opts={opts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugVerify;
