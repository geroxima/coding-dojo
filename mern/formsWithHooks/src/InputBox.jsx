import React from "react";
import './InputBox.css';

function InputBox({ boxName, type, value, onChange }) {
    return (
        <div className="input-box">
            <h3>{boxName}</h3>
            <input 
            type={type} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
}

export default InputBox;
