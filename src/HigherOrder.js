import React, { useState } from 'react';
const EnhancedComponent = (OriginalComponent) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1);
    };
    return <OriginalComponent handleClick={handleClick} show={count} />;
  };
  return NewComponent;
};
export default EnhancedComponent;
