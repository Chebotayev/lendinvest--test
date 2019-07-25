import React from "react";

//components
import Loan from "./Loan";

const Main = ({
  loans,
  changeLoan,
  changeUserAvailableInvestments,
  changeInvestedLoans,
  investedLoans
}) => (
  <div>
    {loans.map(loan => (
      <Loan
        loan={loan}
        key={loan.id}
        changeLoan={changeLoan}
        changeUserAvailableInvestments={changeUserAvailableInvestments}
        changeInvestedLoans={changeInvestedLoans}
        investedLoans={investedLoans}
      />
    ))}
  </div>
);

export default Main;
