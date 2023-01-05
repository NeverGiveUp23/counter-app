import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    product: {id: 1, name: 'Headphones'},
  };

  // the former method in binding the this with a contructo
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // create a function that is checking an if statement if the array length is 0
  // you can use jsx text
  // in the return statement i brought over the UL like how i had it in render function in the div like how i would in html.
  //this was put in for the else statement if the array is more than 0, it will populate the elements
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // the proper way to bind the THIS instance using the arrow function
  // it was returning undefined because you didnt destructure the objects
  handleIncrement = () => {
    const { count, product } = this.state;
    this.setState({ count: count + 1 });
    console.log(product);
    return product;
  }


  render() {
    // add the function as a this property
    this.getBadgeClasses();

    return (
      <React.Fragment>
        {/* when making a class name in a method and you want to add it to your react component */}
        {/* use the curly braces and the this method refering to the function in this component */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button>
        {/* this is another way to do your check, since the first is truthy, it will equate the second half as truthy as well */}
        {/* if it is more than one character */}
        {/* { this.state.tags.length === 0 && 'Please Create a new tag'} */}
        {/* call the function just by adding the curly braces and the this and function name */}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  // assigning a method using vs code refactor to create a method
  // change the naming convention.
  //use defactoring
  //look how you can add class names together and use them in the statment as a check

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // destructuring this.state
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
