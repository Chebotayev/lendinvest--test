import React from "react";

const Footer = ({ totalAmount }) => (
  <footer className="footer">
    <h3>Total amount available for investments: £{totalAmount}</h3>
  </footer>
);

export default Footer;
