import React from 'react';
import './style.css';
import EnhancedComponent from './HigherOrder';

function App(props) {
  const { show, handleClick } = { ...props };

  return (
    <div>
      <button onClick={handleClick}> show: {show}</button>
    </div>
  );
}

export default EnhancedComponent(App);
