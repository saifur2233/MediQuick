import React from "react";
import { Link } from "react-router-dom";

function filterResults(results) {
  let filteredResults = [];
  for (var i = 0; i < results.length; ++i) {
    if (i === 0) {
      filteredResults.push(results[i]);
      continue;
    }

    if (results[i].decodedText !== results[i - 1].decodedText) {
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
}

const ResultContainerTable = ({ data }) => {
  const results = filterResults(data);
  return (
    <table className={"Qrcode-result-table"}>
      <thead>
        <tr>
          <th className="font-bold">#</th>
          <th className="font-bold">Format</th>
          <th className="font-bold">Decoded Text</th>
          <th className="font-bold">Action</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, i) => {
          console.log("Hello ", result);
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td className="px-6">{result.result.format.formatName}</td>
              <td>{result.decodedText}</td>
              <td>
                <Link to={`/customer/${result.decodedText}`}>
                  <button className="btn btn-sm                                                                                          first-line: btn-primary">
                    Check Authenticity
                  </button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const ResultContainer = (props) => {
  const results = filterResults(props.results);
  return (
    <div className="Result-container">
      <div className="Result-header">Scanned results ({results.length})</div>
      <div className="Result-section">
        <ResultContainerTable data={results} />
      </div>
    </div>
  );
};

export default ResultContainer;
