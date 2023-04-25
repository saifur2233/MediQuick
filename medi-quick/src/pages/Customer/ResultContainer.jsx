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
          <td className="font-bold">#</td>
          <td className="font-bold">Format</td>
          <td className="font-bold">Decoded Text</td>
        </tr>
      </thead>
      <tbody>
        {results.map((result, i) => {
          console.log(result);
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td className="px-6">
                <Link>{result.result.format.formatName}</Link>
              </td>
              <td>{result.decodedText}</td>
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
