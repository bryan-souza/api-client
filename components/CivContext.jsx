import React from 'react';
import { useState } from 'react';

const context = React.createContext(null);

function CivContext({ children }) {
  const [civId, setCivId] = useState(null);

  return (
    <context.Provider value={{ civId, setCivId }}>
      {children}
    </context.Provider>
  );
}

export { context };
export default CivContext;