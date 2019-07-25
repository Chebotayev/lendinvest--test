import React from "react";

const Button = ({title, handleClick}) => <button className="button" onClick={handleClick}>{title}</button>;

export default Button;