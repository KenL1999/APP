import React from "react";
import s from "./ErrorRow.module.css";

function ErrorRow({ row, detail, data = {}, handleRetry }) {
  const [name, setName] = React.useState(data.name || "");
  const [email, setEmail] = React.useState(data.email || "");
  const [age, setAge] = React.useState(data.age || "");

  const addName = (e) => {
    setName(e.target.value);
  };
  const addEmail = (e) => {
    setEmail(e.target.value);
  };
  const addAge = (e) => {
    setAge(e.target.value);
  };

  function retryOnClick() {
    handleRetry(row, {
      name: name,
      email: email,
      age: age,
    });
  }

  return (
    <tr>
      <td>{row}</td>
      <td className={detail.name ? s.error : ""}>
        <input type="text" value={name} onChange={addName} />
        {detail.name ? <span>{detail.name}</span> : ""}
      </td>
      <td className={detail.email ? s.error : ""}>
        <input type="text" value={email} onChange={addEmail} />
        {detail.email ? <span>{detail.email}</span> : ""}
      </td>
      <td className={detail.age ? s.error : ""}>
        <input type="text" value={age} onChange={addAge} />
        {detail.age ? <span>{detail.age}</span> : ""}
      </td>
      <td>
        <button className={s.button1} onClick={retryOnClick}>
          Retry
        </button>
      </td>
    </tr>
  );
}

export default ErrorRow;