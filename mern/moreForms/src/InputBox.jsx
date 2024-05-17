import React from "react";
import './InputBox.css';

function InputBox({ boxName, type, value, onChange, validation }) {
    return (
        <div>
            <div className="input-box">
                <h3>{boxName}</h3>
                    <input 
                    type={type} 
                    value={value} 
                    onChange={onChange} 
                />
            </div>
            <div>
                {validation && <p className="validation-alert">{validation}</p>}
            </div>
        </div>
    );
}

export default InputBox;
