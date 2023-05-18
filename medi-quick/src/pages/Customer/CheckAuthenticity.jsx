import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading/Loading";

const CheckAuthenticity = () => {
  const code = useParams();
  const drugCode = code?.drugCode;

  const { data: drug = [], isLoading } = useQuery({
    queryKey: ["drug"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/customer/${drugCode}`
      );
      const data = await res.json();
      return data.drug;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Drug Authenticity Check</h1>
          <p className="py-6 font-bold italic">
            "Don't take chances with your health - Choose MediQuick for reliable
            counterfeit drug detection"
          </p>
          <div className="flex justify-center">
            <div className="card w-full max-w-lg shadow-2xl bg-base-100 border-1 border-y-4 rounded-b-lg border-primary hover:border-4">
              <div className="card-body">
                {drug.length === 0 ? (
                  <>
                    <h2 className="card-title">
                      Drug Not Found In The System...
                    </h2>
                    <p className="text-red-500 bg-neutral">
                      Please, Check the drug carefully!!!{" "}
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="card-title text-2xl text-center">
                      Drug Name: {drug[0]?.drugName}
                    </h2>
                    <p className="text-green-500 font-bold bg-neutral py-2">
                      Status: Authentic
                    </p>
                    <p>Drug Code: {drug[0]?.drugCode}</p>
                    <p>Dosage: {drug[0]?.drugDosage}</p>
                    <div className="card-actions justify-end">
                      <p>Mfg Date: {drug[0]?.mfgDate}</p>
                      <p>Exp Date: {drug[0]?.expDate}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAuthenticity;
