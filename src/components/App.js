import React, { useState } from "react";
//components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
//data
import data from "../data/current-loans.json";

const App = () => {
  const [loans, setLoans] = useState(data.loans); //default state for loans;
  const totalAmount = loans.reduce(
    (acc, loan) => (acc += parseInt(loan.amount.split(",").join(""))),
    0
  );

  const changeLoan = (id, value) => {
    const newLoans = loans.map(loan =>
      loan.id === id
        ? {
            ...loan,
            available:
              (parseInt(loan.available.split(",").join("")) + parseInt(value)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
        : loan
    );
    setLoans(newLoans);
  };
  const [userAvailableInvestments, setAvailableInvestments] = useState(
    totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  ); //default available investments for user;

  const changeUserAvailableInvestments = value => {
    setAvailableInvestments((userAvailableInvestments.split(",").join("") - value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };
  const [investedLoansByUser, setInvestedLoans] = useState([]); //default state for invested loans

  const changeInvestedLoans = id => {
    setInvestedLoans([...investedLoansByUser, id]);
  };

  return (
    <>
      <div className="App">
        <Header />
        <Main
          loans={loans}
          changeLoan={changeLoan}
          changeUserAvailableInvestments={changeUserAvailableInvestments}
          changeInvestedLoans={changeInvestedLoans}
          investedLoans={investedLoansByUser}
        />
        <Footer totalAmount={userAvailableInvestments} />
      </div>
    </>
  );
};

export default App;
