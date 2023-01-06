import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    // destrtucture your props
    const { onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
    return (
      <div>
        <button onClick={onReset}
        className="btn btn-primary btn-sm m-2">Reset</button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            //bubblle it up to handle in the parent component
            onDelete={onDelete }
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // to clean up some code, instead of passing in multiple props
            // just assign the counter to itself like you see below
            // this will bring in all the props for us behind the scenes
            //more work needs to be done in the child components
            counter={counters}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
