import React from 'react';

const Replay = ({ response }) => {
  return (
    <div>
      <h2>Response:</h2>
      <pre>{response}</pre>
    </div>
  );
};

export default Replay;
