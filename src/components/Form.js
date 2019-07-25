import React, { useState } from "react";
//components
import Button from "./Button";

const Form = ({
  amountAvailable,
  changeLoan,
  id,
  setModalOpen,
  changeUserAvailableInvestments,
  changeInvestedLoans
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (parseInt(inputValue) > parseInt(amountAvailable.split(",").join("")))
      setError("You can't invest more than available");
    else {
      changeLoan(id, inputValue ? inputValue : "0");
      changeUserAvailableInvestments(inputValue);
      changeInvestedLoans(id);
      setModalOpen(false);
    }
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <p>Investment amount (£)</p>
      <div className="form">
        <input type="number" value={inputValue} onChange={handleChange} />
        <Button title="Invest" handleClick={handleClick} />
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Form;
