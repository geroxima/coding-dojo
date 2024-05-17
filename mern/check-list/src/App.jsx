import React, { useState } from 'react';
import './App.css';
import InputText from './components/InputText';
import Task from './components/Task';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  return (
    <div className='mainframe'>
      <h1>CheckList</h1>
      <InputText
        setNewItem={setNewItem}
        newItem={newItem}
        items={items}
        setItems={setItems}
      />
      <div>
        {items.map(item => (
          <Task key={item.id} id={item.id} task={item.value} setItems={setItems} />
        ))}
      </div>
    </div>
  );
}

export default App;