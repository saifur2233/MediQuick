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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Drug Authenticity Check</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            {drug.length === 0 ? (
              <>
                <h2 className="card-title">Drug Not Found In The System...</h2>
                <p className="text-red-500 bg-neutral">
                  Please, Check the drug carefully!!!{" "}
                </p>
              </>
            ) : (
              <>
                <h2 className="card-title">Drug Name: {drug[0]?.drugName}</h2>
                <p className="text-green-500 bg-neutral">Status: Authentic</p>
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
  );
};

export default CheckAuthenticity;
