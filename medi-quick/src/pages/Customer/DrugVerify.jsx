import React, { useState } from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import ResultContainer from "./ResultContainer";

const DrugVerify = () => {
  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResults) => {
    console.log("Result: ", decodedResults);
    setDecodedResults((prev) => [...prev, decodedResults]);
  };
  return (
    <div className="hero bg-base-200 py-12">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Verify The Drugs</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
  );
};

export default DrugVerify;
