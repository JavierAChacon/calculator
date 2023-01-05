import React from "react";
import '../styles/button.css';


const Button = (props) => {
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return(
    <div className={`buttonContainer ${isOperator(props.children) ? 'operator' : null}`}
    onClick={ ()=> props.manageClick(props.children) }>
      { props.children }
    </div>
  )
};

export default Button;