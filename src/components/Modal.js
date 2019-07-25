import React from "react";
import ReactDOM from "react-dom";
//components
import Form from "./Form";

const Modal = ({
  setModalOpen,
  title,
  amountAvailable,
  endTime,
  changeLoan,
  id,
  changeUserAvailableInvestments,
  changeInvestedLoans
}) => {
  const handleClick = e => {
    if (e.target.getAttribute("name") === "modalWrapper") setModalOpen(false);
  };

  const countEndDate = () => {
    let day = endTime / 60 / 60 / 24,
      month = day / 31;
    return `${Math.floor(month)} month ${Math.floor(day % 31)} days`;
  };

  return ReactDOM.createPortal(
    <div className="modal-wrapper" name="modalWrapper" onClick={handleClick}>
      <div className="modal-wrapper__info">
        <h3>Invest in Loan</h3>
        <p>{title}</p>
        <div className="modal-loan-info">
          <p>Amount available: {amountAvailable}</p>
          <p>Loan ends in: {countEndDate()}</p>
        </div>
        <Form
          amountAvailable={amountAvailable}
          changeLoan={changeLoan}
          id={id}
          setModalOpen={setModalOpen}
          changeUserAvailableInvestments={changeUserAvailableInvestments}
          changeInvestedLoans={changeInvestedLoans}
        />
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
