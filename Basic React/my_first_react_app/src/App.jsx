import React from 'react';

const App = () => {
  const x = 5;
  return (
    <div
      className={x}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'red',
      }}
    >
      {x}
    </div>
  );
};

export default App;
