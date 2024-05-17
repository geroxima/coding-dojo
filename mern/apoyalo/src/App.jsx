import React from 'react';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Doe" age={28} hairColor="Black" />
      <PersonCard firstName="Jane" lastName="Smith" age={32} hairColor="Brown" />
      <PersonCard firstName="Bob" lastName="Johnson" age={45} hairColor="Blonde" />
      <PersonCard firstName="Emily" lastName="Davis" age={23} hairColor="Red" />
    </div>
  );
}

export default App;
