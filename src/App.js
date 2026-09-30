import React from 'react';

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: '#f2f2f2',
        padding: '10px'
      }}
    >
      <h3>Navbar Component</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello React App</h1>
    </div>
  );
}

export default App;