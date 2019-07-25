import React, { useState } from "react";

//components
import Button from "./Button";
import Modal from "./Modal";

const Loan = ({
  loan,
  changeLoan,
  changeUserAvailableInvestments,
  changeInvestedLoans,
  investedLoans
}) => {
  const handleClick = () => setModalOpen(true);
  const [isModalOpen, setModalOpen] = useState(false); //default state for modal
  const {
    title,
    amount,
    available,
    annualised_return,
    id,
    term_remaining
  } = loan;
  return (
    <>
      {isModalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          title={title}
          changeLoan={changeLoan}
          amountAvailable={available}
          endTime={term_remaining}
          id={id}
          changeUserAvailableInvestments={changeUserAvailableInvestments}
          changeInvestedLoans={changeInvestedLoans}
        />
      )}
      <div className="loan">
        <div className="loan__row">
          <h3>{title}</h3>
          {investedLoans.includes(id) && <h3 className="invested">Invested</h3>}
        </div>
        <div className="loan__row">
          <div className="loan__info">
            <p>Amount: {amount}</p>
            <p>Annualised return: {annualised_return}</p>
            <p>Available: {available}</p>
          </div>
          <div className="loan__button">
            <Button title="INVEST" handleClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loan;
