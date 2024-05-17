import React, { useState } from 'react';
import '../styles/InputText.css';

function InputText(props) {
  const addItem = () => {
    if (!props.newItem) return;

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: props.newItem
    };

    props.setItems(oldItems => [...oldItems, item]);
    props.setNewItem('');
  };

  return (
    <div className='input-text'>
      <input
        type="text"
        placeholder="Enter a task"
        value={props.newItem}
        onChange={e => props.setNewItem(e.target.value)}
        />
      <button onClick={() => addItem()}>Add</button>
    </div>
  );
}

export default InputText;