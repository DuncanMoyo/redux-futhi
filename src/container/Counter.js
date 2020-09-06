import React, { useState } from "react";
import CounterControl from "../components/CounterControl";
import CounterOutput from "../components/CounterOutput";

import {connect} from 'react-redux'
import {incrementAction, decrementAction, additionAction, subtractionAction} from '../store/actions'

const Counter = (addition, subtraction, increment, decrement) => {
  // const [counter, setCounter] = useState(0);

  // const counterChangedHandler = (action, value) => {
  //   switch (action) {
  //     case "inc":
  //       setCounter(counter + 1);
  //       break;
  //     case "dec":
  //       setCounter(counter - 1);
  //       break;
  //     case "add":
  //       setCounter(counter + value);
  //       break;
  //     case "sub":
  //       setCounter(counter - value);
  //   }
  // };

  return (
    <div>
      <CounterControl name='increment' clicked={() => increment}/>
      <CounterControl name='decrement' clicked={() => decrement}/>
      <CounterControl name='addition' clicked={() => addition}/>
      <CounterControl name='subtraction' clicked={() => subtraction}/>
      {/* <CounterOutput value={counter} /> */}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementAction.increment()),
    decrement: () => dispatch(decrementAction.decrement()),
    addition: () => dispatch(additionAction.addition(10)),
    subtraction: () => dispatch(subtractionAction.subtraction(7))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
