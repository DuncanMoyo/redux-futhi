import React from 'react';
import './counterControl.css'

const CounterControl = (props) => {

  return (
    <div className='counter_control' onClick={props.clicked}>
      button
    </div>
  );
};

export default CounterControl;
