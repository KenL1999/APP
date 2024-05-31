import React from "react";
import s from "./ErrorList.module.css";
import ErrorRow from "../../Error/ErrorRow/ErrorRow";

export default function ErrorList({ errorList, data, handleRetry }) {
  function getDataByRow(data, row) {
    return data[row - 1];
  }

  const getTitle = () =>
    `All your (${errorList.length}) records listed below encountered errors. Let's correct them and try again`;

  return (
    <>
      <h2>{getTitle()}</h2>
      <div className={s.body}>
        <table>
          <thead>
            <tr>
              <th>Row</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {errorList.map((element) => {
              return (
                <ErrorRow
                  key={element.row}
                  row={element.row}
                  detail={element.details}
                  data={getDataByRow(data, element.row)}
                  handleRetry={handleRetry}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}