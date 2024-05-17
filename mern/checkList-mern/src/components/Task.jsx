import React from 'react';
import '../styles/Task.css';

function Task(props) {
  function deleteItem() {
    props.setItems(oldItems => oldItems.filter(item => item.id !== props.id));
  }

  return (
    <div className='list-element'>
      <div className='main-task'>
        <input type="checkbox"/>
        <span>{props.task}</span>
      </div>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default Task;