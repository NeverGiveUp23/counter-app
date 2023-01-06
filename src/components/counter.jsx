import React, { Component } from "react";

class Counter extends Component {
  // took out the state object, allowing the parent component to update

  render() {
    this.getBadgeClasses();

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* // changing state to counter from the parent component */}
        {/* adding a onIncrement function using arrow function */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        {/* need to delete from the counters component */}
        {/* when making a function with an argument, use the arrow function to call it */}
        {/* this is calling for the id od the prop in the parent component in the counters.jsx */}
        {/* the counter prop is getting called in preset the id */}
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          Decrement
        </button>
        <button
          // changing state to counter from the parent component
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // changing state to counter from the parent component
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
