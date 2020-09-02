import React from 'react';
import './counterOutput.css'

const CounterOutput = (props) => {
  return (
    <div className='counter-output'>
      Current Counter : {props.value}
    </div>
  );
};

export default CounterOutput;