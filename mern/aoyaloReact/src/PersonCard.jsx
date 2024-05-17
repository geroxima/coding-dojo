import React from 'react';
import './PersonCard.css'

function PersonCard(props) {
  return (
    <div className="person-card">
      <h1>{props.lastName}, {props.firstName}</h1>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  );
}

export default PersonCard;
