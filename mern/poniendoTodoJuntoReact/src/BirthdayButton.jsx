import React from "react";
import './BirthdayButton.css'

function BirthdayButton(props) {
  return (
    <button className="birthday-button" onClick={props.incrementAge}>
      Birthday button for {props.firstName} {props.lastName}
    </button>
  );
}

export default BirthdayButton;
