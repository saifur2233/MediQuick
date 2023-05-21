import React, { useState } from "react";
import QRCode from "react-qr-code";

const ManuGenerateQR = () => {
  const [drugCode, setDrugCode] = useState("");
  // download qr code
  const download = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      // name of the image
      downloadLink.download = `${drugCode}`;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
        <div className="py-20">
          <h1 className="font-bold text-3xl text-center py-6"> QR Code</h1>
          <div
            className="pb-6"
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 128,
              width: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={drugCode.toString()}
              //value={`http://localhost:3000/customer/${drugCode}`}
              viewBox={`0 0 256 256`}
              id="QRCode"
            />
          </div>
          <button onClick={download} className="btn btn-primary text-white">
            Download
          </button>
        </div>
        <div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <h1 className="p-3 font-bold text-center text-3xl">
              Generate QR Code
            </h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Drug Code</span>
                </label>
                <input
                  type="text"
                  value={drugCode}
                  name="drugCode"
                  onChange={(e) => setDrugCode(e.target.value)}
                  placeholder="Enter Drug Code"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">QR GENERATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuGenerateQR;
